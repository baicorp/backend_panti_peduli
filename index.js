import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import ArticleRoute from "./routes/ArticleRoute.js";
import ProfileRoute from "./routes/ProfileRoute.js";


const app = express();

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(ArticleRoute);
app.use(ProfileRoute);

app.listen(4000, ()=> console.log('Server Running..'));