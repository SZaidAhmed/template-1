const express = require("express");
const cors = require('cors');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname,'Hephaestus slider')));
app.use(cors({ origin: true, credentials: true }));


//middleware
app.use(express.json());


module.exports = app;