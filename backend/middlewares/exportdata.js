const getdata=require('../middlewares/getData');
// const html2pdf=require("html2pdf.js");

// module.exports=async function generatePDF() {
    
// 		// 		// Choose the element that your content will be rendered to.
// 		// 		var element = getdata;
//         //         var opt = {
//         //         margin:       1,
//         //         filename:     'myfile.pdf',
//         //         image:        { type: 'jpeg', quality: 0.98 },
//         //         html2canvas:  { scale: 1 },
//         //         jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//         //         };

//         //   html2pdf().set(opt).from(element).save();

//         var element = "hello";
//      html2pdf(element);

// 			}



// var sys=require('sys'); // import 'sys' to 'util'
// var sys=require('util');
//   var fs = require('fs');
//   var pdf = require('pdf');

//   /* create the PDF document */

//   var doc = new pdf();
//   doc.text(20, 20, 'hello, I am PDF.');
//   doc.text(20, 30, 'i was created using node.js version: ' + process.version);
//   doc.text(20, 40, 'i can also be created from the browser');

//   /* optional - set properties on the document */
//   doc.setProperties({
//   	title: 'A sample document created by pdf.js',
//   	subject: 'PDFs are kinda cool, i guess',		
//   	author: 'Marak Squires',
//   	keywords: 'pdf.js, javascript, Marak, Marak Squires',
//   	creator: 'pdf.js'
//   });
//   doc.addPage();

//   doc.setFontSize(22);
//   doc.text(20, 20, 'This is a title');

//   doc.setFontSize(16);
//   doc.text(20, 30, 'This is some normal sized text underneath.');

//   var fileName = "testFile"+new Date().getSeconds()+".pdf";

//   fs.writeFile(fileName, doc.output(), function(err, data){
//     console.log(fileName +' was created! great success!');
//   });