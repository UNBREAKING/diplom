var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(__dirname))

const landingPage = function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
}

app.get('/*', landingPage)

var PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});