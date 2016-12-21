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

router.put('/add', function (req, res, next) {
    if (req.user._type == "admin") {

        var newUser = {
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        };

        require('../config/moodle_user').createMoodleUser(newUser, req.user.token_moodle, function (err, response, body) {
            // console.log(res.body);
            console.log(req.user.token_moodle);
            console.log(body);
            res.redirect('/');
        });
    } else {
        res.render('error');
    }
});
module.exports = router;