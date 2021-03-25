const express = require("express");
const app = express();
app.use(require("cors")());
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect("mongobd://localhost:27017/element-admin-cold", {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
});
const Article = mongoose.model(
  "Article",
  new mongoose.Schema({
    title: { type: String },
    body: { type: String },
  })
);
app.get("/", async (req, res) => {
  res.send("index");
});
app.post("/api/articles", async (req, res) => {
  const article = await Article.create(req.body);
  res.send(article);
});
app.get("/api/articles", async (req, res) => {
  const articles = await Article.find();
  res.send(articles);
});
app.listen(3001, () => {
  console.log("http://localhost:3001");
});
