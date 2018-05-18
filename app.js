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

var User = new Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    job: { type: Schema.Types.ObjectId, ref: 'JobTitle' },
    skill: { type: Schema.Types.ObjectId, ref: 'CoreSkill' },
    skype: String,
    git: String,
    facebook: String
})

var UserModel = mongoose.model('User', User);

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

const removeJobTitle = function (req, res) {
    JobTitleModel.findByIdAndRemove(req.body._id, function(err){
        err ? res.status(500).send({ error: 'Something Wrong' }) :
        res.send({ message: 'Job Title deleted successfull' })
    })
}

const removeCoreSkill = function (req, res) {
    CoreSkillModel.findByIdAndRemove(req.body._id, function(err){
        err ? res.status(500).send({ error: 'Something Wrong' }) :
        res.send({ message: 'Core Skill deleted successfull' })
    })
}

const removeTechnology = function (req, res) {
    TechnologyModel.findByIdAndRemove(req.body._id, function(err){
        err ? res.status(500).send({ error: 'Something Wrong' }) :
        res.send({ message: 'Technology deleted successfull' })
    })
}

const getRegistrationPage = function (req, res) {
    var jobs = JobTitleModel.find().exec()
    var skills = CoreSkillModel.find().exec()
    
    q.all([jobs, skills]).then(([jobs, skills]) => {
        const result = { jobs, skills }
        res.send(result)
      });
}

const registration = function (req, res) {

    (!req.body.email && res.status(500).send({ error: 'Please add email' })) ||
    (!req.body.password && res.status(500).send({ error: 'Please enter password'})) ||
    (req.body.password !== req.body.secondPassword && res.status(500).send({ error: "Passwords doesn't match" })) ||
    (!req.body.name && res.status(500).send({ error: "Please add your name" })) ||
    (!req.body.surname && res.status(500).send({ error: "Please add your surname" }))

    UserModel.findOne({ email: req.body.email }, function (err, resad) {
        if (resad) return res.status(500).send({ error: 'User with this email already exists' });

        var user = new UserModel({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            surname: req.body.surname,
            job: req.body.job,
            skill: req.body.skill,
            skype: req.body.skype,
            git: req.body.git,
            facebook: req.body.facebook
        });
        user.save().then(() => {
            UserModel.findOne({ email: req.body.email }, function (err, user) {
                res.cookie('session_token', decodeURI(user._id)).send({ message: 'success'})
            })

        });
    })
}

app.get('/getAdminPage', jsonParser, getAdminPage)
app.get('/getRegistrationPage', jsonParser, getRegistrationPage)
app.get('/*', landingPage)
app.post('/api/addJobTitle', jsonParser, addJobTitle)
app.post('/api/addCoreSkill', jsonParser, addCoreSkill)
app.post('/api/addTechnology', jsonParser, addTechnology)
app.post('/api/registration',jsonParser, registration)
app.delete('/api/deleteJobTitle', jsonParser, removeJobTitle)
app.delete('/api/deleteCoreSkill', jsonParser, removeCoreSkill)
app.delete('/api/deleteTechnology', jsonParser, removeTechnology)

var PORT = 3000;
app.listen(PORT, function () {
    console.log('http://localhost:' + PORT);
});