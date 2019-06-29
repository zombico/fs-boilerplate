'use strict';
const path = require('path')
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/healthcheck', require('./routes/index').router);
// app.use('/login', require('./routes/login').router);
app.use('/restos', require('./routes/restos').router);
app.use('/authors', require('./routes/authors').router);
app.use('/', express.static(
  path.join(__dirname, '../build'))
)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    const errors = [
      { message: 'unauthorized' },
    ];

    res.status(401).json({ errors });
  }
});

module.exports = app;
