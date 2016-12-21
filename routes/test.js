/**
 * Created by NarX on 12/20/16.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('school_edit');
});

module.exports = router;