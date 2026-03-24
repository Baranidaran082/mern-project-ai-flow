# 🚀 MERN AI Flow App
 
A full-stack MERN application where users type a prompt into an AI-powered flow canvas, receive an AI-generated response, and save it to MongoDB. The saved response is displayed live on a separate preview page.
 
 **Live Application:** [https://mern-project-ai-flow.vercel.app](https://mern-project-ai-flow.vercel.app)  
 **Backend API:** [https://mern-project-ai-flow.onrender.com](https://mern-project-ai-flow.onrender.com)
 
---
 
## ✨ Features
 
- AI-powered prompt generation using OpenRouter
- Interactive flow UI with React Flow
- Save prompts & responses to MongoDB Atlas
- Live preview of saved data
- Fully deployed (Vercel + Render)
 
---
 
## 🛠️ Tech Stack
 
- **Frontend:** React, React Flow, Axios, React Markdown — deployed on **Vercel**
- **Backend:** Node.js, Express.js — deployed on **Render**
- **Database:** MongoDB Atlas (Mongoose)
- **AI:** OpenRouter Free Model API
 
---
 
## How to Run the Project
 
###  Option 1: Use the Live App (Recommended)
 
[https://mern-project-ai-flow.vercel.app](https://mern-project-ai-flow.vercel.app)

---
 
###  Option 2: Run Locally
 
**Clone Repository**
 
```bash
git clone https://github.com/your-username/mern-project-ai-flow.git
cd mern-project-ai-flow
```
 
**Setup & Run Backend**
 
```bash
cd server
npm install
```
 
Create a `.env` file inside `server/`:
 
```env
OPENROUTER_API_KEY=your_openrouter_api_key
MONGO_URI=your_mongodb_connection_string
```
 
Run backend:
 
```bash
node server.js
```
 
Backend runs at: `http://localhost:5000`
 
---
 
**3️⃣ Run Frontend**
 
```bash
cd client
npm install
npm start
```
 
Frontend runs at: `http://localhost:3000`
 
---
 
##  Important Note
 
- The frontend is configured to send API requests to `http://localhost:5000`
- Make sure the backend is running **before** using the frontend locally
- In production, the frontend connects to the deployed backend on Render
 
---
 
##  How It Works
 
1. Open the app — React Flow canvas appears
2. Enter a prompt (e.g., `"Sale 50% Off"`)
3. Click **Run Flow**
4. AI generates a response
5. Click **Save** to store in MongoDB
6. Open the preview page to view saved data
 
---
 
##  API Endpoints
 
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/ask-ai` | Generate AI response |
| POST | `/api/save` | Save prompt & response |
| GET | `/api/saved` | Fetch saved records |
 
---
 
## Deployment

| Layer | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
 
---
 
 