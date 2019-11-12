import { Router } from 'express';
import getNotebyDate from '../controllers/note';

const router = Router();
router.get('/getNotebyDate/:date', getNotebyDate);
export { router as default };
