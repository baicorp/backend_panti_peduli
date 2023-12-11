import express from "express";
import {
    getProfile,
    getProfileById,
    saveProfile,
    updateProfile,
    deleteProfile
} from "../controllers/ProfileController.js";


const router = express.Router();

router.get('/profile', getProfile);
router.get('/profile/:id', getProfileById);
router.post('/profile', saveProfile);
router.patch('/profile/:id', updateProfile);
router.delete('/profile/:id', deleteProfile);

export default router;