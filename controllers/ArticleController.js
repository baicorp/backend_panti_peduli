import Article from "../models/ArticleModel.js";


export const getArticle = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getArticleById = async (req, res) => {
    const { id } = req.params;
    try {
        const article = await Article.findByPk(id);
        if (article) {
            res.status(200).json(article);
        } else {
            res.status(404).json({ message: "Article not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const saveArticle = async (req, res) => {
    const { title, author, description  } = req.body;

    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: 'No files were uploaded.' });
        }

        const { image } = req.files;
        const imageName = `${Date.now()}_${image.name}`;

        image.mv(`./public/images/artikel/${imageName}`, async (error) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }

            const newArticle = await Article.create({
                title,
                author,
                description,
                image: imageName,
            });

            res.status(201).json(newArticle);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateArticle = async (req, res) => {
    const { id } = req.params;
    const { title, author, description, image,  } = req.body;
    try {
        const article = await Article.findByPk(id);
        if (article) {
            await article.update({
                title,
                author,
                description,
                image
                
            });
            res.status(200).json({ message: "Article updated successfully" });
        } else {
            res.status(404).json({ message: "Article not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteArticle = async (req, res) => {
    const { id } = req.params;
    try {
        const article = await Article.findByPk(id);
        if (article) {
            await article.destroy();
            res.status(200).json({ message: "Article deleted successfully" });
        } else {
            res.status(404).json({ message: "Article not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
