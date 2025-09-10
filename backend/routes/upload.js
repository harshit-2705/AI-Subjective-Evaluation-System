const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const { processDocumentForText } = require('../services/ocrService');

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    try {
      await fs.mkdir(uploadDir, { recursive: true });
      cb(null, uploadDir);
    } catch (err) {
      cb(err);
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }
  const filePath = req.file.path;
  const mimetype = req.file.mimetype;
  try {
    const extractedText = await processDocumentForText(filePath, mimetype);
    await fs.unlink(filePath);
    res.json({
      message: 'File uploaded and processed successfully!',
      extractedText: extractedText
    });
  } catch (error) {
    await fs.unlink(filePath).catch(err => console.error("Error deleting file:", err));
    res.status(500).json({ message: 'Error processing document.', error: error.message });
  }
});

module.exports = router;
