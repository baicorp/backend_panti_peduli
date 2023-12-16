import express from 'express';
import {
    getProfile,
    getProfileById,
    addNewProfile,
    updateProfile,
    deleteProfile
} from '../controllers/profileController.js';

const router = express.Router();

router.get('/profiles', getProfile);
router.get('/profiles/:id', getProfileById);
router.post('/profiles', addNewProfile);
router.delete('/profiles/:id', deleteProfile)
// Choose one, adapt to the needs
// router.put('/profiles/:id', updateProfile);
router.patch('/profiles/:id', updateProfile);

export default router;
