const fs = require('fs').promises;
const pdf = require('pdf-parse');
const Tesseract = require('tesseract.js');
const path = require('path');

async function performOcrOnImage(filePath) {
  try {
    const { data: { text } } = await Tesseract.recognize(
      filePath,
      'eng',
      {
        logger: m => console.log(m)
      }
    );
    return text;
  } catch (error) {
    console.error("Error performing OCR on image:", error);
    throw new Error("Failed to perform OCR on image.");
  }
}

async function processDocumentForText(filePath, mimetype) {
  let extractedText = '';
  if (mimetype === 'application/pdf') {
    try {
      const dataBuffer = await fs.readFile(filePath);
      const data = await pdf(dataBuffer);
      extractedText = data.text;
      if (extractedText.trim().length < 50 && data.numpages > 0) {
        console.warn(`PDF "${filePath}" might be image-based. pdf-parse extracted very little text.`);
        extractedText = extractedText.trim() || "Could not extract text from PDF. It might be an image-based PDF requiring advanced OCR.";
      }
    } catch (error) {
      console.error(`Error processing PDF ${filePath}:`, error);
      extractedText = "Failed to process PDF.";
    }
  } else if (mimetype.startsWith('image/')) {
    try {
      extractedText = await performOcrOnImage(filePath);
    } catch (error) {
      console.error(`Error processing image ${filePath}:`, error);
      extractedText = "Failed to process image for OCR.";
    }
  } else {
    extractedText = "Unsupported file type.";
  }
  return extractedText;
}

module.exports = { processDocumentForText };
