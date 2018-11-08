const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = function () {
    var app = express(); 

    app.use(bodyParser.json());
    consign({ cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    return app;

}