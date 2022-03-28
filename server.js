const app = require("./app");
const path = require('path');


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/Hephaestus slider/index.html'))

});


app.listen(8000, () => {
    console.log("server started")
})