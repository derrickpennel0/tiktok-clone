import mongoose from "mongoose";

const tiktokSchemas = mongoose.Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: Number,
  messages: Number,
  shares: Number,
});

const tiktokSchema = mongoose.model("titokVideos", tiktokSchemas);

export default tiktokSchema;
