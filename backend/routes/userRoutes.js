import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
import nodemailer from 'nodemailer'

// Generate a random code with six digits
const generateCode = () =>
    Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, '0');

// Send an email with the code to the user
router.post('/send-code', async (req, res) => {
    const { email } = req.body;
    const code = generateCode();

    // Create a nodemailer transport
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    // Send the email
    try {
        await transport.sendMail({
            user: process.env.GMAIL_USER,
            to: email,
            subject: 'Verify Your Email Address',
            text: `Your verification code is ${code}`,
        });

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: 'Failed to send email' });
    }
});

// Validate the code sent by the user
router.post('/validate-code', (req, res) => {
    const { email, code } = req.body;

    // Compare the code sent by the user with the generated code
    if (code === generateCode()) {
        // Update the user's email as validated in your database

        res.json({ success: true });
    } else {
        res.json({ success: false, error: 'Invalid code' });
    }
});

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)
router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)

export default router