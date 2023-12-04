const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "test success" });
});

app.use(routes);

app.listen(port, () => {
  console.log(`Panti Peduli listening at http://localhost:${port}`);
});
