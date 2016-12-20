/**
 * Created by NarX on 12/20/16.
 */

var express = require('express');
var router = express.Router();

var User = require('../model/users');

router.get('/', function (req, res, next) {
    if (req.user._type == "admin") {
        res.render('register', {
            'title' : 'Register'
        });
    } else {
        res.render('error');
    }
});

router.post('/', function (req, res, next) {
    if (req.user._type == "admin") {
        var username = req.body.username;
        var firstname = req.body.firstname;
        var surname = req.body.surname;
        var email = req.body.email;
        var password = req.body.password;

    }
});