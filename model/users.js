/**
 * Created by magic_000 on 19/12/2016.
 */
var mongoose= require('mongoose');
mongoose.Promise=global.Promise;

//mongoose.connect(uri);

var UserSchema= mongoose.Schema({
    username: {
        type: String,
        unique: true,
        index: true
    },
    password: {
        type: String
    },
    _type: {
        type: String
    },
    token_emis: {
        type: String
    },
    token_sis:{
        type: String
    },
    token_moodle:{
        type: String
    },
    emis_id: Number,
    sis_id: Number,
    moodle_id: Number
});

var user= mongoose.model("Users", UserSchema);

module.exports=user;

var findUserByUsername=function (username) {
    return new Promise(function (resolve, reject) {
        var query={
            username: username
        };
        user.find(query).then(function (res) {
            if(res.length==0){
                reject({
                    msg:"user does not exist!"
                });
            }else{
                resolve(res[0]);
            }
        }, function (err) {
            reject(err);
        });


    });
};


var createUser = function (newUser) {
    return new Promise(function (resolve, reject) {
        user.findUserByUsername(newUser.username).then(function (user) {
            reject({
                msg: "username is not availabe"
            });
        }, function (err) {
            newUser.save().then(function (user) {
                resolve(user);
            }, function (err) {
                reject(err);
            })
        })
    })
};

module.exports.findUserByUsername=findUserByUsername;
module.exports.craeteUser = createUser;