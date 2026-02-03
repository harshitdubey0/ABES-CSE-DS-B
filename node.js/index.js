const fs = require('fs');

// Function to write a file synchronously

 //fs.writeFileSync("./ds-b.txt", "Hello, ABES COLLEGE OF ENGINEERING ds-b");

 //fs.writeFileSync("./abes.txt", "Hello Harshit from ABES COLLEGE OF ENGINEERING");

// Function to read a file synchronously

 const result = fs.readFileSync("./abes.txt","utf-8");
 console.log(result);