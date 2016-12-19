/**
 * Created by magic_000 on 18/12/2016.
 */


var request= require('request');
var option = {
    method: "POST",
    url: 'http://localhost/openemis-school/',
    headers: {
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
    //resolveWithFullResponse: true,
    //JSON: true
};


request(option, function (err, response, body) {
    if(err){
        console.log("Có lỗi");
    }else{
        console.log(JSON.stringify(response));
    }
});