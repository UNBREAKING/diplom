require('babel-register')({
    presets: ['react', 'es2015'],
    plugins: [
        [
            "babel-plugin-styled-components",
            {
                "ssr": true
            }
        ]
    ]
});

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(require('./routes/index.js'));

var PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});