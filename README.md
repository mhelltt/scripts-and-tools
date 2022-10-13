# tools

Welcome to my tools repository. I will share tools that I have used professionally to automate tasks or streamline workflows.

## barcode-template-generator
At my current job, we are creating new products all the time. Our manufacturers need PDF barcode sheets so they can make stickers to place on all of the products before they ship them. 

Initially, this was done by hand for each product using an Adobe InDesign template that needed to be re-linked twice for each product. This took forever, so I wrote this program.

This program:  
* takes a csv input file with SKU's, Titles, and Product Names
* creates 2 template files for each product
* searches a directory of barcode image files and pastes in one barcode repeated per page
* saves both files as a PDF in an output folder
