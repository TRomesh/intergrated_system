var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(!req.user){
        res.send({
           msg: "Not found"
        });
    }else{
        res.render('dashboard', { title: 'Express' });
    }

});

module.exports = router;
