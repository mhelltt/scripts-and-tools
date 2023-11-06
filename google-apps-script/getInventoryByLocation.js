function getInventoryByLocation() {
  
    // https://dev.skuvault.com/reference/gettokens
    // Tokens must be retrived by SkuVault user from link above
    const TenantToken = [TENANT TOKEN HERE];
    const UserToken = [USER TOKEN HERE];
    
    // https://dev.skuvault.com/reference/getavailablequantities
    const endpoint = 'https://app.skuvault.com/api/inventory/getInventoryByLocation'
    var requestPages = []
    
    // Count SKU'S in ALL_SKUS, create different HTTP POST requests
    function createRequestPages() {
      const ALL_SKUS = SpreadsheetApp.getActive().getSheetByName('ALL_SKUS');
      var skusPerPage = 10000;
      var numSkus = ALL_SKUS.getRange('B1:B').getValues().filter(String).length;
      console.log(`numSkus: ${numSkus}`)
      var numPages = Math.ceil(numSkus/skusPerPage);
      for (i=0; i<numPages; i++) {
          requestPages[i] = {
            'url' : endpoint,  
            'method': 'post',
            'headers' : {'Content-Type': 'application/json', 'Accept': 'application/json'},
            'payload': JSON.stringify({
            'PageNumber': i,
            'PageSize': skusPerPage,
            'ExpandAlternateSkus': false,
            'TenantToken': TenantToken,
            'UserToken': UserToken
            }),
          'muteHttpExceptions': true
          }
      }
      return requestPages
    }
  
    // fetch data by passing requestPages from createRequestPages() into fetchAll
    var response = UrlFetchApp.fetchAll(createRequestPages());
  
    // parse pages and load into dataAll array
    dataAll = []
    for (i=0; i<response.length; i++) {
      dataAll.push(JSON.parse(response[i].getContentText()))
    }
    console.log(`dataALL length: ${dataAll.length}`)
    console.log(dataAll[0].Items)
    // loop through pages and pull sku and quantity values into one data array
    data = []
    for (i=0; i<dataAll.length; i++) {
      dataPage = Object.values(dataAll[i].Items);
      skuKeys = Object.keys(dataAll[i].Items)
      dpLength = Object.keys(dataPage).length;
      console.log(`response page ${i+1} length: ${dpLength}`)
      for (j=0; j<dpLength; j++) {
        if (dataPage[j].length) {
          row = [];
          row.push(skuKeys[j]);
          row.push(dataPage[j][0].LocationCode);
          row.push(dataPage[j][0].Quantity);
          data.push(row)
        }
      }
    }
  
    console.log(`data length: ${data.length}`)
    console.log(`data slice: ${data.slice(0,10)}`)
  
    var InventoryByLocation = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("InventoryByLocation");
    var range = InventoryByLocation.getRange("A2:C");
    range.clearContent()
    InventoryByLocation.getRange(2,1,data.length,data[0].length).setValues(data)
  }