const express = require('express');
const app = express();

const path = require('path');

app.get('/gethello', (req, res) => {
    res.send("Hello NodeJS!!!")
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
