import express from "express";
import sendMail from "./apps/sendMail";

if (process.env.NODE_ENV == "development") {
  require("dotenv").config();
}

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("hello");
});

app.get("/send/:email", async (req, res) => {
  res.send("sent!");
  await sendMail(req.params.email);
});

app.get("/track", (req, res) => {
  // res.send("email opened");
  console.log("Email Opened at :" + Date());
});

app.listen(PORT, () => {
  console.log(`server up on port ${PORT}`);
});
