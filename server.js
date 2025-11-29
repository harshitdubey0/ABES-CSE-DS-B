import express from 'express';
const app = express();
const port = 4001;

app.use(express.json());

const students = [
    {id : 1, name : 'aditya', subject : 'math' },
    {id : 2, name : 'rahul', subject : 'science' },
    {id : 3, name : 'sonu', subject : 'english' },
    {id : 4, name : 'monu', subject : 'history' },
];
// first route 
app.get('/students', (req, res) => {
    
    try {
        res.status(200).json( message: "show all students", students );
    } catch (error) {
        res.status(500).json({ message: "data not fetched", error: error.message   });
    }
});

// search data for student 
app.get('/:id', (req, res) => {
    try {
    const id = req.params.id;

    const student = students.find( s=> s.id ); 
    
    if(!student){
        return res.status(404).json({ message: "student not found" });
        

    }
}


app.listen(port, () => {
  console.log(Server is running on http://localhost:${port});
});