var path = require('path');
var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var app = express();
var jsonParser = bodyParser.json();
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/diplom';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
var Schema = mongoose.Schema;


var JobTitle = new Schema({
    name: String,
    color: String
});

var JobTitleModel = mongoose.model('JobTitle', JobTitle);

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(express.static(__dirname))



const landingPage = function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
}

const addJobTitle = function (req, res) {

    if (!req.body && !req.body.name) return res.sendStatus(400);

    JobTitleModel.findOne({ name: req.body.name }, function (err, resad) {
       if (resad) return res.sendStatus(400);
    })

    var jobTitle = new JobTitleModel(req.body);
    jobTitle.save().then(() => {
        JobTitleModel.findOne(req.body, function (err, resad) {
            res.send(resad)
        })

    });
}

app.get('/*', landingPage)

app.post('/api/addJobTitle', jsonParser, addJobTitle)


var PORT = 3000;
app.listen(PORT, function () {
    console.log('http://localhost:' + PORT);
});