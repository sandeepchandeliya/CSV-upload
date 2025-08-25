const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes.js');

const app = express();
const PORT = 3000;

//--->ensure upload directory exists to store CSV file
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

//---> enable CORS for frontend requests
app.use(cors());

//--->parse Json bodies
app.use(express.json());

//--->multer config for handling CSV file
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir), // Save in "uploads" folder
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)), // Unique name with timestamp
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    //---> this will only allow CSV files only
    if (path.extname(file.originalname) !== '.csv') {
      return cb(new Error('Only .csv files allowed!'));
    }
    cb(null, true);
  },
});

//---> root route
app.get('/', (req, res) => {
  res.status(200).send('CSV Upload API is running');
});

//--->file related route
app.use('/api', fileRoutes(uploadDir, upload));

//--->starting the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
});
