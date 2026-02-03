
const fs = require('fs');

// Function to write a file asynchronously

//  fs.writeFile("./ds-b.txt", "we are code " ,()=>{});

 //fs.writeFileSync("./abes.txt", "Hello Harshit from ABES COLLEGE OF ENGINEERING");

// Function to read a file asynchronously
fs.readFile("./abes.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error", err);
    }
    else{
        console.log(result);
    }
 });
 