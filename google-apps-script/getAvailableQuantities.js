function getAvailableQuantities() {
  
    // https://dev.skuvault.com/reference/gettokens
    // Tokens must be retrived by SkuVault user from link above
    const TenantToken = [TENANT TOKEN HERE];
    const UserToken = [USER TOKEN HERE];
    
    // https://dev.skuvault.com/reference/getavailablequantities
    const endpoint = 'https://app.skuvault.com/api/inventory/getAvailableQuantities'
    var requestPages = []
    
    // Count SKU'S in ALL_SKUS, create different HTTP POST requests
    function createRequestPages() {
      const ALL_SKUS = SpreadsheetApp.getActive().getSheetByName('ALL_SKUS');
      var skusPerPage = 5000;
      var numSkus = ALL_SKUS.getRange('B1:B').getValues().filter(String).length;
      console.log(`numSkus: ${numSkus}`)
      var numPages = Math.ceil(numSkus/skusPerPage);
      for (i=0; i<numPages; i++) {
          requestPages[i] = {
            'url' : endpoint,  
            'method': 'post',
            'headers' : {'Content-Type': 'application/json', 'Accept': 'application/json'},
            'payload': JSON.stringify({
            'ModifiedAfterDateTimeUtc': 'Beginning of time.',
            'ModifiedBeforeDateTimeUtc': 'Now.',
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
  
    // loop through pages and pull sku and quantity values into one data array
    data = []
    for (i=0; i<dataAll.length; i++) {
      dataPage = dataAll[i].Items;
      console.log(`response page${i+1} length: ${dataPage.length}`)
      for (j=0; j<dataPage.length; j++) {
        row = [];
        if (dataPage[j].IsAlternateSku == false) {
          row.push(dataPage[j].Sku);
          row.push(dataPage[j].AvailableQuantity)
          data.push(row);
        }
      }
    }
  
    console.log(`data length: ${data.length}`)
    console.log(`data slice: ${data.slice(0,10)}`)
  
    var CurrentInventory = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("CurrentInventory");
    var range = CurrentInventory.getRange("A2:B");
    range.clearContent()
    CurrentInventory.getRange(2,1,data.length,data[0].length).setValues(data)
  }