const express = require('express');
const multer = require('multer');
const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Set the upload directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Set the file name
    }
});

// Multer upload configuration
const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 500} // Maximum file size in bytes
}).single('file'); // The name of the file parameter

// Upload endpoint
router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).json({error: 'Error uploading file'});
        }

        console.log(req.file);

        return res.status(200).json({message: 'File uploaded successfully', image: req.file.filename.toString()});
    });
});

module.exports = router;
