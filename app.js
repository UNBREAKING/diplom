var path = require('path');
var express = require('express');
var app = express();
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/diplom';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(express.static(__dirname))

const landingPage = function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
}

app.get('/*', landingPage)

var PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});