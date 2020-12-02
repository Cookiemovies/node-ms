'use strict';

var properties = require('../package.json')
var town = require('../service/town');
var distance = require('../service/distance');

var controllers = {

    townList: function(req, res) {
        town.listTowns(req, res, function(err, towns) {
            if (err)
                res.send(err);
            res.send(towns);
        });
    },

    findName: function(req, res) {
        town.findName(req, res, function(err, foundTown) {
            if (err)
                res.send(err);
            res.json(foundTown);
        });
    },

    findId: function(req, res) {
        town.findId(req, res, function(err, foundTown) {
            if (err)
                res.send(err);
            res.json(foundTown);
        });
    },

    app: function(req, res) {
        res.send('This is the TOWN API');
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