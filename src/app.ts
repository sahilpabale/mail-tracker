import express from "express";
import sendMail from "./apps/sendMail";

const app = express();

app.get("/", async (req, res) => {
  res.send("hello");
  await sendMail("dev.sahilpabale@gmail.com");
});

app.get("/track", (req, res) => {
  // res.send("email opened");
  console.log("email opened");
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
