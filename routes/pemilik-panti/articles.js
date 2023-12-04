const express = require("express");
const { uploadArticle } = require("../uploadImg");
const {
  createArticle,
  readAllArticle,
  readArticle,
  updateArticle,
  deleteArticle,
  readArticleUser,
} = require("../../controller/pemilik-panti/articles");

const app = express();

//api untuk membuat article
app.post(
  "/articles/create",
  uploadArticle.single("articleImage"),
  createArticle
);

//api untuk membaca semua article
app.get("/articles", readAllArticle);

//api untuk membaca article sesuai dengan id article
app.get("/articles/:id", readArticle);

//api untuk membaca semua article berdasarkan id user tertentu
app.get("/articles/:id", readArticleUser);

//api untuk mengupdate article sesuai dengan id article
app.put("/articless/:id", uploadArticle.single("articleImage"), updateArticle);

app.put(
  "/api/articles/:id",
  uploadArticle.single("articleImage"),
  async (req, res) => {
    try {
      await updateArticle(req, res);
    } catch (error) {
      // Handle error
      console.log(error);
    }
  }
);

//api untuk menghapus article sesuai dengan id article
app.delete("/articles/:id", deleteArticle);

module.exports = app;
