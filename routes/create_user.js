/**
 * Created by NarX on 12/20/16.
 */
var express = require('express');
var router = express.Router();

router.get('/add', function (req, res, next) {
    if (req.user._type == "admin") {
        res.render('student_add');
    }
});

router.post('/add', function (req, res, next) {
    if (req.user._type == "admin") {
        var newUser = {
            username: req.username,
            password: req.password,
            firstname: req.firstname,
            lastname: req.lastname,
            email: req.email
        }

        require('../config/moodle_user').createMoodleUser(newUser, function (err, res, body) {
            console.log(res.headers);
        });
    } else {
        res.render('error');
    }
});
module.exports = router;