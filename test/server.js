'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql2');

app.get('/', (req, res) => {
    res.redirect('./index.html');
});

app.use(express.static(__dirname));

app.post('/profile.html', (req, res) => {
    res.redirect('./profile.html');
    console.log("It worked!");
});

app.post('/teamJoin.html', (req, res) => {
    return getTeams();
})

async function getTeams() {
    const sql = await init();
    const query = 'SELECT * FROM team';

    const [results] = await sql.query(query);
    return results;
}

async function init() {
    if (sqlPromise) return sqlPromise;

    sqlPromise = newConnection();
    return sqlPromise;
}

app.listen(8080);