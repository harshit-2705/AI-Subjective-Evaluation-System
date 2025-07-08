# 🧠 AI Subjective Answer Evaluation System

An AI-based system that automates evaluation of handwritten or typed subjective answers. It extracts text from scanned PDFs/images, compares it with model answers using NLP and semantic similarity, and scores responses in real time — ensuring faster, fairer, and more consistent grading.

## 🎯 Goal

To build an end-to-end system that:
- Accepts scanned answer sheets (PDF/images)
- Extracts answers using OCR
- Compares answers with model responses
- Scores them based on relevance, clarity, and structure
- Displays results via a web dashboard or API

## 🚀 Features & Workflow

- 📄 Upload scanned PDFs or handwritten answer images
- 👁 Extracts handwritten text using **TrOCR** with OpenCV-based preprocessing
- 🧬 Generates or accepts model answers (via **GPT**, **T5**, or manual input)
- 🔍 Scores student answers using **semantic similarity** (BERT/SentenceTransformers)
- 🖼 Detects and analyzes diagrams using **OpenCV**
- ⚙ Processes all answersheets through a modular **FastAPI** backend
- 📊 Displays real-time feedback (WIP) with per-question analytics using **Streamlit**
- 🧱 Supports end-to-end **PDF processing pipeline**
- 🔄 Modular design for easy extension or integration into other systems


## 🧰 Tech Stack

- **Languages & Frameworks**: Python, FastAPI, Streamlit
- **OCR & Image Processing**: TrOCR, Tesseract OCR, OpenCV, pdf2image, Pillow
- **NLP & AI Models**: Hugging Face Transformers, SentenceTransformers


## ✅ Current Progress

- [x] PDF/Image upload + segmentation
- [x] OCR extraction (typed + handwritten)
- [x] Text cleaning and diagram-aware zoning
- [ ] Semantic embedding + scoring logic
- [ ] Streamlit dashboard and API endpoints

## 🏗 Architecture

Upload → Convert → OCR → Clean → Embed → Compare → Score → View



