/*
1. Prompt user for a url link using the npm inquirer module
2. use the qr-image to create the image
3. save the image to a text file*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Enter the URL link for QRCode: ",
      name: "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var url = (answers.URL);
    // var qr = require('qr-image');
    // saving the url as a text file
  fs.writeFile('QR.txt', (url),(err) =>{
    if (err) throw err;
    console.log('File to saved')
  });
 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('LinkedIn QR.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment?
    } else {
      // Something else went wrong
    }
  });

  