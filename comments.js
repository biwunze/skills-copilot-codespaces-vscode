// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = require('./comments');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(comments.find(comment => comment.id === id));
});

app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,