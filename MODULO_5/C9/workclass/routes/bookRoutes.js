import express from 'express';
import { getBooks, getBookById } from '../controllers/bookController.js';
import { createBook, updateBook, deleteBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;