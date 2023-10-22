# tools

Welcome to my tools repository. I will share tools that I have used professionally to automate tasks or streamline workflows.

## Barcode Sheet Generator (./barcodes)
I created this tool to put together barcode sheet pdfs for a clothing brand that I work for. Our manufacturer required that we submit barcodes separated by fit (slim or classic) for each product.

Initially, this was done by hand for each product using an Adobe InDesign template that needed to be re-linked twice for each product. This took forever and required a lot of clicking, so I wrote this program.

This program:  
* takes a csv input file with SKU's, Titles, and Product Names
* creates 2 template files for each product
* searches a directory of barcode image files and pastes in one barcode repeated per page
* saves both files as a PDF in an output folder

## Barcode Sheet Generator for Shoe Box (./barcodes-shoes)
This was a quick adaptation of the previous project that I used to create stickers for the side of a shoebox for several dress shoes products.

This program:
* takes csv input file with SKU's, Style, Color, Size, & Product
* creates 1 template file for each product with 8 barcode stickers to a page, 1 size per page
* saves an output file as a PDF in an output folder
