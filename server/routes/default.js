import express from "express";
import Videos from "../models/tiktokSchema.js";

const app = express();

// ALL APIS HERE

//  create a card
app.post("/add-tiktok-video", (req, res) => {
  const newVideo = req.body;
  Videos.create(newVideo)
    .then((result) => {
      res.status(201).send({
        message: "Created successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/tiktok/videos", (req, res) => {
  Videos.find()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

export default app;
