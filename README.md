# 🧠 AI-Powered Subjective Answer Evaluation System

An AI-based system that automates the evaluation of handwritten student answersheets using OCR, NLP, and deep learning. The project supports end-to-end processing of scanned PDFs, model answer generation, semantic scoring, and diagram analysis.

---

## 🚀 Features

- ✅ Extracts text from handwritten answers using **TrOCR**
- ✅ Scores student responses using **semantic similarity (BERT embeddings)**
- ✅ Supports **AI-generated model answers**
- ✅ Automatically detects and evaluates **diagrams** using **OpenCV**
- ✅ Handles full **PDF processing workflow**
- ✅ Displays real-time feedback and scoring
- ✅ Modular architecture for easy extension

---

## 🧰 Tech Stack

### 💻 Core Technologies
- **Python**
- **FastAPI** / Flask
- **Streamlit** (Dashboard UI)

### 🧠 AI & NLP
- [x] Hugging Face Transformers
- [x] Sentence Transformers (`paraphrase-mpnet-base-v2`)
- [x] TrOCR (`microsoft/trocr-base-handwritten`)
- [x] PyTorch
- [x] spaCy, NLTK

### 🖋 OCR & Image Processing
- TrOCR
- pytesseract (fallback)
- OpenCV
- pdf2image
- PIL (Pillow)

### 📊 Data & Visualization
- Pandas
- NumPy
- Matplotlib

---

<pre> ```plaintext 📂 Project Structure . ├── pipeline.py # Main script: PDF → text + diagram extraction ├── model_answer_generator.py # Generates AI model answers (optional) ├── scoring_module.py # Computes similarity-based scores ├── output/ # Extracted page images and diagrams ├── sample_answersheet.pdf # Example input file ├── requirements.txt # All dependencies ├── templates/ # (If using Flask/Streamlit) ├── static/ # (CSS/JS assets if any) ``` </pre>


