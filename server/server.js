import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Prompt from "./models/Prompt.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: "https://mern-project-ai-flow.vercel.app"
}));
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI,{
          dbName: "barani"
  }

  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));



app.post("/api/save", async (req, res) => {
  try {
    const { prompt, response } = req.body;

    const newData = new Prompt({ prompt, response });
    await newData.save();

    res.json({ message: "Saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Save failed" });
  }
});



app.post("/api/ask-ai", async (req, res) => {
  try {
    console.log("KEY:", process.env.OPENROUTER_API_KEY);
    const { prompt } = req.body;
    const response = await axios.post(
  "https://openrouter.ai/api/v1/chat/completions",
  {
    model: "openrouter/free",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  },
  {
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://mern-project-ai-flow.vercel.app", // 🔥 REQUIRED
      "X-Title": "MERN AI Flow App" // 🔥 REQUIRED
    },
  }
);
console.log(response.data)
const result = response.data.choices[0].message.content;
res.json({ result });
  } catch (error) {
    // 🔥 This will show the EXACT error in Render logs
    console.error("=== OPENROUTER ERROR ===");
    console.error("Status:", error?.response?.status);
    console.error("Message:", error?.response?.data);
    console.error("Raw:", error.message);
    console.error("=======================");

    res.status(500).json({ 
      error: "AI request failed",
      details: error?.response?.data || error.message  // 👈 also sends error to frontend
    });
  }
});


app.get("/api/get-data", async (req, res) => {
  try {
    const data = await Prompt.find().sort({ _id: -1 }); // latest first
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});


app.listen(5000, () => console.log("Server running on port 5000"));