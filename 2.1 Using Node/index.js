 const fs=require("fs");
fs.writeFile("message.txt","hellow world Angela", (err)=>{
    if(err) throw err;
        console.log("files has been saved");

});

fs.readFile("./message.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }); 
//or 
  fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }); 