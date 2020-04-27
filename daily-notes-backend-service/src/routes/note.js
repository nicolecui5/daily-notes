import { Router } from 'express';
import { getNoteByDate, updateNoteByDate } from '../controllers/note';

const router = Router();
router.get('/getNoteByDate/:year-:month-:day', getNoteByDate);
router.put('/putNoteByDate/:year-:month-:day', updateNoteByDate);
// router.delete();
export { router as default };
