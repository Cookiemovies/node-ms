'use strict';

var properties = require('../package.json')
var town = require('../service/town');
var country = require('../service/country');
var distance = require('../service/distance');

var controllers = {

    townList: function(req, res) {
        town.list(req, res, function(err, towns) {
            if (err)
                res.send(err);
            res.send(towns);
        });
    },

    findTownName: function(req, res) {
        town.findName(req, res, function(err, foundTown) {
            if (err)
                res.send(err);
            res.json(foundTown);
        });
    },

    findTownId: function(req, res) {
        town.findId(req, res, function(err, foundTown) {
            if (err)
                res.send(err);
            res.json(foundTown);
        });
    },

    countryList: function(req, res) {
        country.list(req, res, function(err, countries) {
            if (err)
                res.send(err);
            res.send(countries);
        });
    },

    findCountryName: function(req, res) {
        country.findName(req, res, function(err, foundCountry) {
            if (err)
                res.send(err);
            res.json(foundCountry);
        });
    },

    findCountryId2: function(req, res) {
        country.findId2(req, res, function(err, foundCountry) {
            if (err)
                res.send(err);
            res.json(foundCountry);
        });
    },

    app: function(req, res) {
        res.send('This is the TOWN-COUNTRY API');
    },
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
};

module.exports = controllers;