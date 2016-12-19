/**
 * Created by magic_000 on 20/12/2016.
 */
var express = require('express');
var router = express.Router();

var passport= require('passport');

var strategy= require('passport-local').Strategy;

var users_model= require('../model/users');

passport.use('local', new strategy(function (username, password, done) {
    users_model.findUserByUsername(username).then(function (user) {
        if(user.password===password){
            return done(null, user, {result: true});
        }else{
            return done(null, false, {result: false});
        }
    }, function (err) {
        return done(null, false, {result: false});
    });
}));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});


passport.deserializeUser(function (userid, done) {
   users_model.findById(userid).then(function (user) {
       done(null, user);
   }, function (err) {
       console.log(err);
   });
});


router.post('/', function(req, res, next) {

    var passportRes= passport.authenticate('local',  function(err, user, info){
        if(user){
            console.log("Login success");

            req.logIn(user, function(err){
                if(err){
                    return next(err);
                }else{
                    return res.send(info);
                }
            });
            //res.send(info);
        }else{
            console.log('Failed');
            res.send(info);
        }
    });
    passportRes(req, res, next);

});


router.get('/', function (req,res, next) {


    console.log(req.user);

   res.render('login');
});



module.exports = router;
