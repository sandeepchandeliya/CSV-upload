const express = require('express');
const { uploadFile, listFiles, getCSV } = require("../controllers/fileController");

module.exports =(uploadDir, upload)=>{
    const router = express.Router();

    //--->upload a csv file
    router.post('/upload', upload.single('file'), uploadFile);

    //--->list of all uploaded CSV file
    router.get('/files', listFiles(uploadDir));

    //--->fetch CSV data as JSON
    router.get('/files/:filename', getCSV(uploadDir));

    return router;
}
