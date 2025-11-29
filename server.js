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
    
    if(student == -1){
        return res.status(404).json({ message: "student not found" });


    }
    res.status(200).json({ message: "student found", student  });
    } catch (error) {
        res.message(500).json({ message: "error in fetching student", error: error.message });
    }
});

// create student 
app.post('/add ', (req, res) => {
    try {
         const new student ={
            id: students.length + 1,
            ...req.body
            };
            students.push(new student);
            res.status(201).json({ message: "student added successfully", new student  });  
    } catch (error) {
        res.status(500).json({ message: "data not save", error: error.message });





         
    }
})

// edit data
app.put('/edit/:id', (req, res) => {
    try {
        const id = req.params.id;
        const studentIndex = students.findIndex( s => s.id == id );
        if(studentIndex === -1){
            return res.status(404).json({ message: "student not found" });
        }
        students[studentIndex] = {
            ...students[studentIndex],
            ...req.body
        };
        res.status(200).json({ message: "student data  succesfully updated", student: students[studentIndex] });
    }
        catch (error) {
        res.status(500).json({ message: "error in updating student", error: error.message });
    }
});

// delete data
app.delete('/delete/:id', (req, res) => {
    try {
        const id = req.params.id;
        const studentIndex = students.findIndex( s => s.id == id );
        if(studentIndex === -1){
            return res.status(404).json({ message: "student not found" });
        }
        students.splice(studentIndex, 1);
        res.status(200).json({ message: "student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "error in deleting student", error: error.message });
    }   



app.listen(port, () => {
  console.log(Server is running on http://localhost:${port});
});