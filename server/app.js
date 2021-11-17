const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');
app.use(express.json());
const User = require('./model/userSchema');

app.use(require('./router/auth'));
const PORT = process.env.PORT;


// app.get('/home', (req, res) => {
//     res.send(`Hello world from home`);
// });

app.get('/about', (req, res) => {
    res.send(`Hello world from about`);
});

app.get('/upload', (req, res) => {
    res.send(`Hello world from upload`);
});

app.get('/result', (req, res) => {
    res.send(`Hello world from result`);
});

app.get('/text', (req, res) => {
    res.send(`Hello world from text`);
});

app.get('/stats', (req, res) => {
    res.send(`Hello world from stats`);
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});