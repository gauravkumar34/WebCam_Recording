const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "localhost://",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const recordSchema = new mongoose.Schema({
  video: String,
  timestamp: String,
  ip: String,
});

const recordModel = mongoose.model("Record", recordSchema);

app.post("/api/saverecord", (req, res) => {
  const { video, timestamp, ip } = req.body;
  console.log({ video });
  console.log({ timestamp });
  console.log({ ip });
  //   const record = new recordModel({video, timestamp, ip});
  //   record.save();
  res.send("received data");
});

app.get("/", (req, res) => {
  res.send("server running");
});
app.listen(8000, console.log("SERVER IS RUNNGING ON 8000"));
