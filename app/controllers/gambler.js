'use strict';

var Gambler = require('../models/gambler');

exports.index = function(req, res){
  Gambler.all(function(err, gamblers){
    console.log(gamblers);
    res.render('gambler/index', {gamblers:gamblers});
  });
};

