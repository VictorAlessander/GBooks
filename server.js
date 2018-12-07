const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Book = require('./api/models/booksModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Bookdb', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

const routes = require('./api/routes/booksRoutes');

routes(app);

app.listen(port);

console.log(`BookAPI server started on ${port}`);
