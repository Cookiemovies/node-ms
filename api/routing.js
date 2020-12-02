'use strict';

const controller = require('./controller');

module.exports = function(app) {
    app.route('/')
        .get(controller.app);
    app.route('/about')
        .get(controller.about);
    app.route('/towns')
        .get(controller.townList);
    app.route('/id/:id')
        .get(controller.findId);
    app.route('/name/:name')
        .get(controller.findName);
};