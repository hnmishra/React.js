import inquirer from "inquirer";
//var qr = require('qr-image');
import qr from "qr-image";
import fs from "fs";
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


inquirer
  .prompt([
    {message: "Type in your URl",
     name:"URL"
    }   

  ])
  .then((answers) => {
     const URL=answers.URL;
     var qr_svg = qr.image(URL);
     qr_svg.pipe(fs.createWriteStream('qr_img.png'));

     fs.writeFile("url.txt",URL,(err)=>{
        if (err) throw(err);
          console.log("this file has been saved");
     });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  