const pool = require("../../database");

//Membuat artikel baru
const createArticle = (req, res) => {
  try {
    const { title, author, description } = req.body;
    const image = req.file.filename;

    if (!title || !author || !description || !image) {
      return res
        .status(400)
        .json({ error: "title, author, and article must be provided." });
    }
    // Insert valid article into the database
    pool.query(
      "INSERT INTO articles (title, author, description, image) VALUES (?, ?, ?, ?)",
      [title, author, description, image],
      function (err, rows, fields) {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Failed to upload article." });
        }

        return res.status(200).json({
          message: "success",
          body: {
            title: title,
            author: author,
            description: description,
            image: image,
          },
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error bos" });
  }
};

//Membaca seluruh artikel
const readAllArticle = (req, res) => {
  pool.query("SELECT * FROM articles", function (err, rows, fields) {
    // Connection is automatically released when query resolves
    if (err) return res.json({ message: "failed to read article table" });
    return res.json({ data: rows });
  });
};

// Membaca semua artikel berdasarkan user id
const readArticleUser = (req, res) => {
  const { idUser } = req.params;
  pool.query(
    `SELECT * FROM articles WHERE id = ${idUser}`,
    function (err, rows, fields) {
      // Connection is automatically released when query resolves
      if (err) return res.json({ message: "failed to read article table" });
      return res.json({ data: rows });
    }
  );
};

//Membaca artikel berdasarkan id artikel
const readArticle = (req, res) => {
  const { id } = req.params;
  pool.query(
    `SELECT * FROM articles WHERE id = ${id}`,
    function (err, rows, fields) {
      // Connection is automatically released when query resolves
      if (err) return res.json({ message: "failed to read article table" });
      if (rows.length === 0) return res.json({ message: "article not found" });
      console.log(typeof rows);
      return res.json({ data: rows });
    }
  );
};

//Update artikel berdasarkan id
const updateArticle = (req, res) => {
  try {
    const { title, author, description } = req.body;
    const { id } = req.params;
    // const image = req.file.filename; error tidak terbaca sementara update untuk semua field kecuali gambar article tidak dapat di update

    let image;
    if (req.file) {
      console.log(req.file);
      image = req.file.filename;
    }

    // Query to update article
    pool.query(
      "UPDATE articles SET title=?, author=?, description=?, image=? WHERE id = ?",
      [title, author, description, image, id],
      function (err, rows, fields) {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Failed to update article." });
        }

        if (rows.affectedRows === 0) {
          return res.json({ message: "Article not found" });
        }

        return res.status(200).json({
          message: "Success update article",
          body: {
            title: title,
            author: author,
            description: description,
            image: image,
          },
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error bos" });
  }
};

//Menghapus artikel berdasarkan id tertentu
const deleteArticle = (req, res) => {
  try {
    const { id } = req.params;

    // query untuk menghapus article berdasarkan id
    pool.query(
      "DELETE FROM articles WHERE id = ?",
      [id],
      function (err, rows, fields) {
        // cek apakah ada kesalahan
        if (err) {
          return res.status(500).json({ error: "Failed to delete article." });
        }

        // cek apakah artikel dengan id tersebut ada atau tidak jika tidak maka mengembalikan 404
        if (rows.affectedRows === 0) {
          return res.status(404).json({ error: "Article not found." });
        }

        // pesan jika sukses menghapus artikel
        return res.status(200).json({
          message: "success delete article",
        });
      }
    );
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createArticle,
  readAllArticle,
  readArticle,
  updateArticle,
  deleteArticle,
  readArticleUser,
};
