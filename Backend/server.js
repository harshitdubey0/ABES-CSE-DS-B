const express = require('express');
const app = express()
const port = 8080 

app.get('/', (req, res) => {
    res.send("this is my first server")
})
app.get('/about', (req, res) => {
   const students = [
    {
        id : 1,
        name : "Harshit",
        Class : "12th"
    },
    {
        id : 2,
        name : "Aditya",
        Class : "12th"
    },
    {
        id : 3,
        name : "Naman",
        Class : "12th"
    },
    {
        id : 4,
        name : "Piyush",
        Class : "12th"
    },

{
    id : 5,
    name : "Neeraj",
    Class : "12th"
}
   ]

    res.send(students);
})

app.get('/contact', (req, res) => {
    res.send("<h1>this is contact page<h1>")
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
