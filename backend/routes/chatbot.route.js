import express from 'express';
import { Message } from '../controllers/chatbot.message.js';

const router = express.Router();

router.post("/send", Message)
export default router;

