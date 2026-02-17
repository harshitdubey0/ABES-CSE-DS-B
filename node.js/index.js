

//{
// const fs = require('fs');

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
// fs.appendFile("./ds-b.txt", `Data science` ,()=>{});





// copy file using synchronous method
 // fs.cpSync("./abes.txt","./A1.txt");


// copy file using asynchronous method
//  fs.cp("./abes.txt","./A2.txt",(err,result)=>{
//     if(err){
//         console.log("Error", err);
//     }
//     else {
       
//         console.log(result);
        
//     }
//  });

 // delete file using asynchronous method
// fs.unlink("./A2.txt", (err) => {
//   if (err) {
//     console.log("Error deleting file ", err);
//   } else {
//     console.log("File deleted successfully ");
//   }
// });



// delete file using synchronous method
// fs.unlinkSync("./A1.txt");





//}



const os = require('os');
console.log("system platform",os.platform());
console.log("user info",os.userInfo());
console.log("cpu",os.arch());
console.log("free memory",os.freemem());
console.log("total memeory",os.totalmem());
console.log("uptime",os.uptime());
console.log("homedir",os.homedir());
console.log("host name",os.hostname());