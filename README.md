# AI Subjective Answer Evaluation System

Scorify is an AI-based system that automates evaluation of handwritten or typed subjective answers. It extracts text from scanned PDFs/images, compares it with model answers using NLP and semantic similarity, and scores responses in real time — ensuring faster, fairer, and more consistent grading.

## 🎯 Goal

To build an end-to-end system that:
- Accepts scanned answer sheets (PDF/images)
- Extracts answers using OCR
- Compares answers with model responses
- Scores them based on relevance, clarity, and structure
- Displays results via a web dashboard or API

## 🚀 Features

- 📄 Upload scanned PDFs or images
- 👁 OCR using Tesseract + OpenCV preprocessing
- 🧬 Model answer generation (GPT/T5) or manual upload
- 🔍 Semantic scoring with SentenceTransformers
- 📊 Dashboard (WIP) with per-question analytics
- ⚙ FastAPI backend for processing and results

## 🧰 Tech Stack

- Python, FastAPI, Streamlit (UI)
- Tesseract OCR, OpenCV
- HuggingFace Transformers, SentenceTransformers
- pdf2image, Pillow

## ✅ Current Progress

- [x] PDF/Image upload + segmentation
- [x] OCR extraction (typed + handwritten)
- [x] Text cleaning and diagram-aware zoning
- [ ] Semantic embedding + scoring logic
- [ ] Streamlit dashboard and API endpoints

## 🏗 Architecture

Upload → Convert → OCR → Clean → Embed → Compare → Score → View
