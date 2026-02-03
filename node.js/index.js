
const fs = require('fs');

// Function to write a file asynchronously

//  fs.writeFile("./ds-b.txt", "we are code " ,()=>{});


// write using asynchronous method
//  fs.writeFile("./A1.txt", "we are code " ,()=>{});
// fs.writeFile("./A2.txt", "we are code " ,()=>{});



// read using asynchronous method
// fs.readFile("./A1.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// });
// fs.readFile("./A2.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// });

 //fs.writeFileSync("./abes.txt", "Hello Harshit from ABES COLLEGE OF ENGINEERING");

// Function to read a file asynchronously
// fs.readFile("./abes.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
//  });
 
// write using synchronous method
// fs.appendFileSync("./abes.txt", `Data science`);

// write using asynchronous method
fs.appendFile("./ds-b.txt", `Data science` ,()=>{});
