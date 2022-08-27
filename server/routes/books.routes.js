const BooksController = require('../controllers/books.controller');
module.exports = (app) => {
    app.get('/api', BooksController.index);
    app.post('/api/books', BooksController.createBook);
    app.get('/api/books', BooksController.getAllBooks);
    app.get('/api/books/:id', BooksController.getBook);
    app.put('/api/books/:id', BooksController.updateBooks);
    app.delete('/api/books/:id', BooksController.deleteBooks);
}

