'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql2');
let sqlPromise;

app.get('/', (req, res) => {
    res.redirect('./index.html');
    console.log("Test");
});

app.get('/index.html', (req, res) => {
    console.log("index");
})

app.get('*', (req, res) => {
    console.log("This is working");
})

app.use(express.static(__dirname));

app.post('/profile.html', (req, res) => {
    res.redirect('./profile.html');
    console.log("It worked!");
});

app.get('/teamJoin.html', (req, res) => {
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