const mongoose = require('mongoose');

const Book = mongoose.model('Books');

exports.listAllBooks = (req, res) => {
  Book.find({}, (err, book) => {
    if (err) { res.send(err); }
    res.json(book);
  });
};

exports.createABook = (req, res) => {
  const newBook = new Book(req.body);
  newBook.save((err, book) => {
    if (err) { res.send(err); }
    res.json(book);
  });
};

exports.findABook = (req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) { res.send(err); }
    res.json(book);
  });
};

exports.updateABook = (req, res) => {
  Book.findOneAndUpdate({ _id: req.params.bookId }, req.body, { new: true }, (err, book) => {
    if (err) { res.send(err); }
    res.json(book);
  });
};

exports.removeABook = (req, res) => {
  Book.remove({ _id: req.params.bookId }, (err) => {
    if (err) { res.send(err); }
    res.json({ message: 'Book successfully deleted' });
  });
};
