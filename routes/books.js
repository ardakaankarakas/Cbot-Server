const books = require('../controllers/booksController');
const router = require('express').Router();

router.post('/createBook', books.createBook);
router.get('/getBooks', books.getBooks);
router.post('/deleteBookById',books.deleteBookById );
router.delete('/deleteBookByName',books.deleteBookByName );

module.exports = router;