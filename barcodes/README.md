# Barcode Template Generator

I created this tool to put together barcode sheet pdfs for a clothing brand that I work for. Our manufacturer required that we submit barcodes separated by fit (slim or classic) for each product.

Initially, this was done by hand for each product using an Adobe InDesign template that needed to be re-linked twice for each product. This took forever and required a lot of clicking, so I wrote this program.

## Input
* barcode-img-files contains directories of barcode image files in PNG format, sorted by style
* 'skua-products.csv' needs product data ('SKUS', 'Titles', 'Product')
* 'template.docx' is the basic template with a first page for the paper cutter and a second page that is copied n number of times, where n is the number of Slim Fit SKU's or Classic Fit SKU's the product has

## Output
* 'barcode-pdfs' is the results folder
* 2 PDF files will be created for each product in the input csv file -- 1 for Slim Fit sizes and 1 for Classic Fit sizes
* Each PDF must contain a full page of barcode images for each size that the product comes in
* Program needed to be able to handle varying size scales (i.e. some products come in 33 sizes, 46 sizes, 52 sizes, etc.)

## Notes
* Input file 'skus-products.csv' data comes from our SKU database
* PNG image files are created using SoftMatic Barcode Factory program using Code-128
* Python version 3.6 or later supports f-strings which I used to print out progress messages
* Microsoft Word will require permissions to be granted the first time the program is run
