const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req, res) => {
    res.send("welcome to express js");
})

app.get('/about', (req, res) => {
    res.send("this is about page");

})
app.listen(port, () => {
    console.log(`server is run at http://localhost:${ port}`);})