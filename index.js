import express from "express";
import calc from "./structural-patterns/module-pattern";
import "./structural-patterns/mixins-pattern";

const num = calc();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`showing number ${num} on port ${port}`);
});

app.listen(port, () => console.log(`your server is running on port ${port}`));
