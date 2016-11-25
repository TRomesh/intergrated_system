/**
 * Created by magic_000 on 26/11/2016.
 */
var rp = require('request-promise');

var option = {
    url: 'http://localhost/openemis-school/',
    form: {
        "_method": "POST",
        "data[SecurityUser][username]": "admin",
        "data[SecurityUser][password]": "12345678",
        "submit": "login"
    },
    resolveWithFullResponse: true
};


function _getToken() {
    return new Promise(function (resolve, reject) {
        rp(option).then(function (res) {
            resolve(res.headers['set-cookie'][0].split("; ")[0]);
        }, function (err) {
            reject();
        });
    });
}

/*
var resPromise = rp(option);

resPromise.then(function (res) {
    console.log(res.headers['set-cookie'][0].split("; ")[0]);
}, function (err) {
    console.log(err);
})*/


/* cách sử dụng module getToken được viết lại theo promise, có sử dụng module request-promise(trên npm)

var getToken = require('./config/getToken');
getToken().then(function (res) {
    // res này chính là token trả về
    console.log(res);
}, function (err) {
    console.log("Loi cmnr");
});*/


module.exports=_getToken;