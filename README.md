# scripts-and-tools

Here are some scripts and tools that I have used professionally to automate tasks or streamline workflows.

## [Google Apps Script Functions](https://github.com/mhelltt/tools/tree/main/google-apps-script) ![google apps script logo](https://github.com/mhelltt/scripts-and-tools/blob/main/images/gapps-script-logo.png)
Both of these Google Apps Script functions connect our SkuVault, our Warehouse Management System, to Google Sheets by sending POST requests to the appropriate SkuVault API endpoint. JSON response data is paginated and must be pulled in multiple requests before it is parsed, compiled, and fed into the target Google Sheet.

![skuvault logo](https://github.com/mhelltt/scripts-and-tools/blob/main/images/skuvault-logo.png) ⇢ ![google sheets logo](https://github.com/mhelltt/scripts-and-tools/blob/main/images/google-sheets-logo.png)

## [Barcode Sheet Generator](https://github.com/mhelltt/tools/tree/main/barcodes) ![python](https://github.com/mhelltt/scripts-and-tools/blob/main/images/python-logo.png)
This python script creates pdfs with barcodes for a clothing brand that I work for. Our manufacturer required that we submit a two barcode sheets for each product, one for all of the 'Slim Fit' sizes and another for all the 'Classic Fit' sizes.

Initially, this was done by hand for each product using an Adobe InDesign template that needed to be re-linked twice for each product. This took forever and required a lot of click-click-click-clicking, so I wrote this script.

This program:  
* takes a csv input file with SKU's, Titles, and Product Names
* creates 2 template files for each product
* searches a directory of barcode image files and pastes in one sku-barcode table per page
* saves both files as a PDF in an output folder

## [Barcode Sheet Generator for Shoe Box](https://github.com/mhelltt/tools/tree/main/barcodes-shoes) ![python](https://github.com/mhelltt/scripts-and-tools/blob/main/images/python-logo.png)
This was a quick adaptation of the previous project that I used to create stickers for the side of a shoebox for several dress shoes products.

This program:
* takes csv input file with SKU's, Style, Color, Size, & Product
* creates 1 template file for each product with 8 barcode stickers to a page, 1 size per page
* saves an output file as a PDF in an output folder
