# tools

Welcom to my tools repository. These are tools that I have used professionally to automate tasks or streamline workflows.

## barcode generator
At my current job, we are creating new products all the time. Our manufacturers need PDF barcode sheets for each of these new products and their respective size variants. Initially, this was done by hand for each product using an Adobe InDesign template that needed to be re-linked twice for each product.  

I wrote a program that:  
* takes a csv input file with SKU's, Titles, and Product Names
* creates two template files for each product (sizes need to be separated by Slim Fit and Classic Fit)
* searches a directory of barcode image files and assigns one barcode per page
* saves both files as a PDF in an output folder
