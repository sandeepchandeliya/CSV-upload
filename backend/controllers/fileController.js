const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

//--->handle file upload
exports.uploadFile = (req, res) => {
  res.json({
    message: 'File uploaded successfully!',
    filename: req.file.filename,
  });
};

//--->return list of uploaded file
exports.listFiles = (uploadDir) => (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Error reading files' });
    res.json(files);
  });
};

//--->parse and return CSV content as JSON
exports.getCSV = (uploadDir) => (req,res) => {
  const results = [];
  const filePath = path.join(uploadDir, req.params.filename);

  //-->if file not found
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found!' });
  }

  //-->read and parse CSV using csv-parse
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data)) //-->collect each row
    .on('end', () => res.json(results))
    .on('error', (err) => res.status(500).json({ error: err.message }));
};
