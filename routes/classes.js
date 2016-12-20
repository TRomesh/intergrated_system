/**
 * Created by NarX on 11/25/16.
 */
var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');

// GET token fix me
var token = "CAKEPHP=e3181936f42dbefd62876d7194cef111";
var url = "http://localhost:8888/openemis-school/Classes";

var getdataF = require('../config/get_request');
router.get('/list', function (req, res, next) {
    var result = [];
    getdataF(url, token, function (err, response, body) {
        $ = cheerio.load(body);
        $('tbody').children().each(function (i) {
            var tmpClass = {};
            $(this).children().each(function (e) {

                if (e == 0) {
                    tmpClass.name = $(this).text();
                } else if (e == 2) {
                    tmpClass.numberseat = $(this).text();
                }
            });
            result.push(tmpClass);
        });
        res.send( {classes:result} );
    });
});

module.exports = router;