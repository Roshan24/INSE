'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.redirect('./index.html');
});

app.use(express.static(__dirname));

app.post('/profile.html', (req, res) => {
    res.redirect('./profile.html');
    console.log("It worked!");
});



app.listen(8080);