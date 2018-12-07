const bookList = require('../controllers/booksController');

module.exports = (app) => {
  app.route('/books')
    .get(bookList.listAllBooks)
    .post(bookList.createABook);

  app.route('/books/:bookId')
    .get(bookList.findABook)
    .put(bookList.updateABook)
    .delete(bookList.removeABook);
};
