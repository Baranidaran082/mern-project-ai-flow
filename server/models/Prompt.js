import mongoose from "mongoose";

const promptSchema = new mongoose.Schema({
  prompt: String,
  response: String,
});

const Prompt = mongoose.model("Prompt", promptSchema);

export default Prompt;