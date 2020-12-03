'use strict';

const controller = require('./controller');

module.exports = function(app) {
    app.route('/')
        .get(controller.app);
    app.route('/about')
        .get(controller.about);
        app.route('/towns')
        .get(controller.townList);
    app.route('/townid/:id')
        .get(controller.findTownId);
    app.route('/townname/:name')
        .get(controller.findTownName);
    app.route('/countries')
        .get(controller.countryList);
    app.route('/countryid2/:id2')
        .get(controller.findCountryId2);
    app.route('/countryname/:name')
        .get(controller.findCountryName);
};