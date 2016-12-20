/**
 * Created by NarX on 12/20/16.
 */
var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');

var User = require('../model/users');
var get_request = require('../config/get_request');
var post_request = require('../config/post_request');

// show list all courses
router.get('/list', function (req, res, next) {
    token = req.user.token_moodle;
    
    get_request('http://localhost:8888/moodle27/course/index.php', token, function (err, response, body) {
        if (err)
            console.log(err);
        else {
            res.send(body);
        }
    });
});

// show details of a course
router.get('/:id', function (req, res, next) {

});

router.post('/:id/edit', function (req, res, next) {
    var fullname = req.fullname;
    var shortname = req.shortname;
    var visible = true;
    var startdate
    var token = req.user.token_moodle;
    var form = {
        'id' : '7',
        'sesskey': 'Nh0Emzujep',
        fullname: req.fullname,


    };

    post_request('url', token, form, function (err, res, body) {

    });
});
module.exports = router;