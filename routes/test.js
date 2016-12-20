/**
 * Created by NarX on 12/20/16.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('teacher_add');
});

module.exports = router;