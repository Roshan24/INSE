'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // res.redirect('');
});

// app.use(express.static(__dirname + '/test'));
//
// app.get('/', (req, res) => {
//   res.redirect('index.html'); // Redirects to home page when no path specified
// });

app.get('/test/profile.html', (req, res) => {
  res.redirect('profile.html')
  // console.log("It worked!");
});

app.listen(8081);
