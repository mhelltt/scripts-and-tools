# tools

Welcome to my tools repository. Here are some tools that I have used professionally to automate tasks or streamline workflows.

## [Google Apps Script Functions](https://github.com/mhelltt/tools/tree/main/google-apps-script) ![google apps script logo](https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Apps_Script.png)
Both of these connect our Warehouse Management System, SkuVault, to Google Sheets to pull in current availabilities and current warehouse locations.

API tokens must be provided. Both of these scripts created multiple POST requests for paginated JSON data using the UrlFetchApp.fetchAll() method. The JSON data is then parsed and certain columns are fed into an array that is later pushed into Google Sheets.

## [Barcode Sheet Generator](https://github.com/mhelltt/tools/tree/main/barcodes) ![python](https://staging.python.org/static/community_logos/python-powered-w-70x28.png)
I created this tool to put together barcode sheet pdfs for a clothing brand that I work for. Our manufacturer required that we submit barcodes separated by fit (slim or classic) for each product.

Initially, this was done by hand for each product using an Adobe InDesign template that needed to be re-linked twice for each product. This took forever and required a lot of clicking, so I wrote this program.

This program:  
* takes a csv input file with SKU's, Titles, and Product Names
* creates 2 template files for each product
* searches a directory of barcode image files and pastes in one barcode repeated per page
* saves both files as a PDF in an output folder

## [Barcode Sheet Generator for Shoe Box](https://github.com/mhelltt/tools/tree/main/barcodes-shoes) ![python](https://staging.python.org/static/community_logos/python-powered-w-70x28.png)
This was a quick adaptation of the previous project that I used to create stickers for the side of a shoebox for several dress shoes products.

This program:
* takes csv input file with SKU's, Style, Color, Size, & Product
* creates 1 template file for each product with 8 barcode stickers to a page, 1 size per page
* saves an output file as a PDF in an output folder
