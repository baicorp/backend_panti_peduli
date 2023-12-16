import express from 'express';
import {
    getArticle,
    getArticleById,
    addNewArticle,
    updateArticle,
    deleteArticle
} from '../controllers/articleController.js';

const router = express.Router();

router.get('/articles', getArticle);
router.get('/articles/:id', getArticleById);
router.post('/articles', addNewArticle);
router.delete('/articles/:id', deleteArticle)
// Choose one, adapt to the needs
// router.put('/articles/:id', updateArticle);
router.patch('/articles/:id', updateArticle);

export default router;
