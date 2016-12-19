/**
 * Created by magic_000 on 26/11/2016.
 */
var rp = require('request-promise');

var option = {
    method: "POST",
    url: 'http://localhost/openemis-school/',
    header: {
        'Host': 'localhost',
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0",
        'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,*!/!*;q=0.8",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate",
        'Referer': "http://localhost/openemis-school/",
        "Cookie": "io=TFhAiThLoLPWDg2bAAAE; CAKEPHP=79k4qp511anvhgu6q0auufh9a2",

        "Upgrade-Insecure-Requests":"1",


        'Connection': "keep-alive"
    },
    form: {
        "_method": "POST",
        "data[SecurityUser][username]": "admin",
        "data[SecurityUser][password]": "12345678",
        "submit": "login"
    },
    resolveWithFullResponse: true,
    //JSON: true
};


function _getToken() {
    return new Promise(function (resolve, reject) {
        rp(option).then(function (res) {
            resolve(res.headers['set-cookie'][0].split("; ")[0]);
            //console.log(res.header);

        }, function (err) {
            reject(err);
        });
    });
}


var resPromise = rp(option);

resPromise.then(function (res) {
    //var tmp = res.headers['set-cookie'][0].split("; ")[0];
    console.log("resolve + 53")
    console.log(JSON.stringify(res));

    //console.log(res.headers['set-cookie'][0].split("; ")[0]);
}, function (err) {
    var headers=err.response.headers['set-cookie'];
    //console.log("reject 59");

    for(var i in headers){
        console.log(headers[i]);
    }
});




module.exports = _getToken;

