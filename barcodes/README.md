# Barcode Template Builder

At my current job, we are creating new products all the time. Our manufacturers need PDF barcode sheets so they can make stickers to place on all of the products before they ship them. Initially, this was done by hand for each product using an Adobe InDesign template that needed to be re-linked twice for each product. Now I just run this program.

## Objective
* Create 2 PDF files for each product in the input csv file -- 1 for Slim Fit sizes and 1 for Classic Fit sizes
* Each PDF must contain a full page of barcode images for each size that the product comes in
* Program needed to be able to handle varying size scales (i.e. some products come in 33 sizes, 46 sizes, 52 sizes, etc.)

## Requirements
* Input file 'skus-products.csv' needs product data ('SKUS', 'Titles', 'Product')
* PNG image files are created using SoftMatic Barcode Factory program and placed into 'barcode-img-files/'
* Python version 3.6 or later supports f-strings which I used to print out progress messages
* Microsoft Word will require permissions to be granted the first time the program is run
