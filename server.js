const app = require("./app");
const path = require('path');


// app.get('/', function (req, res) {
//     console.log("first")
//     res.sendFile(path.join(__dirname + '/Hephaestus slider/index.html'))
// });


app.listen(process.env.PORT || 8003, () => {
    console.log("server started")
})