import React, { useState, useRef } from 'react';
import axios from 'axios';
import './UploadFile.css';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentTextContent, setCurrentTextContent] = useState('');
  const textEditorRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setCurrentTextContent('');
    setStatusMessage('');
  };

  const handleProcessInput = async () => {
    if (!selectedFile) {
      setStatusMessage('❌ Please select a file to process.');
      return;
    }

    setIsProcessing(true);
    setStatusMessage('⏳ Processing content...');
    
    try {
      setStatusMessage('⏳ Uploading file and performing OCR...');
      const formData = new FormData();
      formData.append('file', selectedFile);

      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (res.data.extractedText) {
        setCurrentTextContent(res.data.extractedText);
        setStatusMessage(`✅ File uploaded and text extracted successfully!`);
      } else {
        setCurrentTextContent('No text could be extracted from the document.');
        setStatusMessage(`⚠️ File uploaded, but no text extracted or an issue occurred.`);
      }

      if (textEditorRef.current) {
        textEditorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

    } catch (err) {
      setStatusMessage(`❌ Processing failed: ${err.response?.data?.message || err.message}.`);
      setCurrentTextContent('');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopyText = () => {
    if (textEditorRef.current) {
      textEditorRef.current.select();
      document.execCommand('copy');
      setStatusMessage('✅ Text copied to clipboard!');
      setTimeout(() => setStatusMessage(''), 2000);
    }
  };

  return (
    <div className="main-content-wrapper">
      <div className="input-column">
        <div className="upload-container">
          <h2 className="upload-title">📄 Upload Answer Sheet</h2>
          <div className="button-group">
            <label className="glow-button file-label">
              Choose File
              <input type="file" onChange={handleFileChange} accept=".pdf,.png,.jpg,.jpeg" className="hidden-input" />
            </label>
            <button
              className="glow-button"
              onClick={handleProcessInput}
              disabled={isProcessing || !selectedFile}
            >
              {isProcessing ? 'Processing...' : 'Process Content'}
            </button>
          </div>
          {selectedFile && (
            <p className="selected-file">
              📎 Selected File: <strong>{selectedFile.name}</strong>
            </p>
          )}
        </div>
        <div className="text-editor-section">
          <h3 className="text-editor-title">📝 Extracted Answer Sheet Text:</h3>
          <textarea
            ref={textEditorRef}
            className="text-editor-area"
            value={currentTextContent}
            onChange={(e) => setCurrentTextContent(e.target.value)}
            placeholder="Upload an answer sheet file to see the extracted text here..."
          ></textarea>
          <p className="scroll-hint">Scroll to view full text. You can edit this text before processing.</p>
          <div className="editor-buttons">
            <button className="glow-button copy-button" onClick={handleCopyText} disabled={!currentTextContent}>
              Copy Text
            </button>
          </div>
        </div>
        {statusMessage && (
          <p className={`status-message ${statusMessage.startsWith('✅') ? 'success' : statusMessage.startsWith('⏳') ? 'pending' : 'error'}`}>
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
