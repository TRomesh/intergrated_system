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

});
module.exports = router;