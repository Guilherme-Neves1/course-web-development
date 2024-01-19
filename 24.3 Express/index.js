import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>Click</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact Me</h2><p>Phone +55</p>")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

