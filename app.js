var path = require('path');
var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var q = require('q')

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

var CoreSkill = new Schema({
    name: String,
    color: String
})

var CoreSkillModel = mongoose.model('CoreSkill', CoreSkill);

var Technology = new Schema({
    name: String,
    color: String
})

var TechnologyModel = mongoose.model('Technology', Technology);

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(express.static(__dirname))



const landingPage = function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
}

const addJobTitle = function (req, res) {

    if (!req.body && !req.body.name) return res.status(500).send({ error: 'Empty name for job title' });

    JobTitleModel.findOne({ name: req.body.name }, function (err, resad) {
        if (resad) return res.status(500).send({ error: 'You have already added this title' });

        var jobTitle = new JobTitleModel(req.body);
        jobTitle.save().then(() => {
            JobTitleModel.findOne(req.body, function (err, resad) {
                res.send(resad)
            })

        });
    })
}

const addCoreSkill = function (req, res) {

    if (!req.body && !req.body.name) return res.status(500).send({ error: 'Empty name for core skill' });

    CoreSkillModel.findOne({ name: req.body.name }, function (err, resad) {
        if (resad) return res.status(500).send({ error: 'You have already added this skill' });

        var coreSKill = new CoreSkillModel(req.body);
        coreSKill.save().then(() => {
            CoreSkillModel.findOne(req.body, function (err, resad) {
                res.send(resad)
            })

        });
    })
}

const addTechnology = function (req, res) {

    if (!req.body && !req.body.name) return res.status(500).send({ error: 'Empty name for technology' });

    TechnologyModel.findOne({ name: req.body.name }, function (err, resad) {
        if (resad) return res.status(500).send({ error: 'You have already added this technology' });

        var technology = new TechnologyModel(req.body);
        technology.save().then(() => {
            TechnologyModel.findOne(req.body, function (err, resad) {
                res.send(resad)
            })

        });
    })
}

const getAdminPage = function (req, res) {
    var jobs = JobTitleModel.find().exec()
    var skills = CoreSkillModel.find().exec()
    var technologies = TechnologyModel.find().exec()
    
    q.all([jobs, skills, technologies]).then(([jobs, skills, technologies]) => {
        const result = { jobs, skills, technologies }
        res.send(result)
      });
}

app.get('/api/getAdminPage', jsonParser, getAdminPage)
app.get('/*', landingPage)
app.post('/api/addJobTitle', jsonParser, addJobTitle)
app.post('/api/addCoreSkill', jsonParser, addCoreSkill)
app.post('/api/addTechnology', jsonParser, addTechnology)

var PORT = 3000;
app.listen(PORT, function () {
    console.log('http://localhost:' + PORT);
});