// src/routes/request.routes.js
import { Router } from 'express';
import {
    showForm,
    sendMessage,
    listMessages,
} from '../controllers/request.controller.js';

const router = Router();

router.get('/', showForm);
router.post('/send', sendMessage);
router.get('/messages', listMessages);

export default router;
