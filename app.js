const express = require("express");
const cors = require('cors');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'Hephaestus slider')));
app.use(express.static(path.join(__dirname, 'Destiny')));
app.use(cors({ origin: true, credentials: true }));


//middleware
app.use(express.json());


app.get('/template', function (req, res) {
    console.log("first")
    res.sendFile(path.join(__dirname + '/Hephaestus slider/index.html'))
});

app.get('/template-1', function (req, res) {
    console.log("second")
    res.sendFile(path.join(__dirname + '/Destiny/index.html'))
});

module.exports = app;