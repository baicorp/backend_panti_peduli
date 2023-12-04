const express = require("express");
const { article } = require("./pemilik-panti");

const app = express();

const pemilikPanti = "/api/pemilik-panti";

//prefix semua api untuk pemilik panti
app.use(pemilikPanti, article);

module.exports = app;
