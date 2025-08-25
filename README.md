# 📊 CSV Upload Dashboard

A full-stack project to **upload, view, and manage CSV files**.  
The app allows uploading CSVs, listing them, viewing data in a dynamic table with **search, sorting, and pagination** — built with **Node.js (Express)** and **Vanilla JS frontend**.  

---

## 🚀 Features
- ✅ Upload CSV files (CSV-only validation on both frontend & backend)  
- ✅ View all uploaded files  
- ✅ Dynamic table (headers generated automatically from CSV)  
- ✅ Search in table (filters rows in real-time on frontend)  
- ✅ Sort columns (ascending/descending toggle)  
- ✅ Pagination (10 rows per page)  
- ⚡ Scalable backend folder structure (controllers, routes)  
- 🔒 Multer for file handling & validation  

---

## 📂 Folder Structure
```bash
csv-upload-dashboard/
│── backend/
│ ├── controllers/
│ │ └── fileController.js # Handles CSV logic
│ ├── routes/
│ │ └── fileRoutes.js # API routes
│ ├── uploads/ # Uploaded CSV files
│ │ 
│ ├── server.js # Main Express server
│ 
│
│── frontend/
│ └── index.html 
│
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
1.git clone https://github.com/<your-username>/csv-upload-dashboard.git
cd csv-upload-dashboard

2.Install Backend Dependencies
cd backend
npm install

3.Run the Server
node server.js

Server will start on:
👉 http://localhost:3000/

4.Open Frontend
  4.1 -->Navigate to frontend/

  4.2--->Open index.html directly in your browser


🛠 API Endpoints (Test in Postman)
  1.Root Check
  GET http://localhost:3000/

  2.Upload a CSV
  POST http://localhost:3000/api/upload
    Body → form-data
    Key: file (Type: File) → choose CSV file

  3.List Uploaded Files
   GET http://localhost:3000/api/files

  4.Get CSV Content
   GET http://localhost:3000/api/files/<filename>.csv

