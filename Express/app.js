// const express = require('express');
// const app = express();

// const multer = require('multer');

// const port = 8000;
// app.get('/', (req, res) => {
//     res.send("welcome to express js");
// })

// app.get('/about', (req, res) => {
//     res.send("this is about page");

// })
// app.listen(port, () => {
//     console.log(`server is run at http://localhost:${ port}`);})


const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 8000;

// Storage configuration
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Allow only images
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif/;
        const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mime = allowedTypes.test(file.mimetype);

        if (ext && mime) {
            cb(null, true);
        } else {
            cb('Only images are allowed');
        }
    }
});

// Make uploads folder public
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send("welcome to express js");
});

// Show upload form on /about
app.get('/about', (req, res) => {
    res.send(`
        <h2>Upload Image</h2>
        <form action="/about" method="POST" enctype="multipart/form-data">
            <input type="file" name="image" />
            <button type="submit">Upload</button>
        </form>
    `);
});

// Handle image upload on /about
app.post('/about', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.send("No file uploaded");
    }

    res.send(`
        <h2>Image Uploaded Successfully!</h2>
        <img src="/uploads/${req.file.filename}" width="300"/>
    `);
});

app.listen(port, () => {
    console.log(`server is run at http://localhost:${port}`);
});