var request= require('request');

// this.getTokenEmis('admin', '12345678', function (res) {
//     console.log(res);
// });


//callback (token)
module.exports.getTokenEmis = function (username, password, callback) {
    var option = {
        method: "POST",
        url: 'http://localhost:8888/openemis-school/',
        headers: {
            'Host': 'localhost:8888',
            'Cookie': 'CAKEPHP=9ac869cbe91418c3fc1785cf88287423',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'

        },
        form: {
            "_method": "POST",
            "data[SecurityUser][username]": username,
            "data[SecurityUser][password]": password,
            "submit": "login"
        }
    };


    request(option, function (err, response, body) {
        if (err)
            console.log(err);
        var token  = response.headers['set-cookie'][1].split(';')[0];
        callback(token);
    });
};


// this.getTokenSis('admin', '12345678a@', function (token) {
//    console.log(token);
// });

//callback token
module.exports.getTokenSis = function(username, password, callback) {
    var opts = {
        method: 'POST',
        url: 'http://localhost:8888/opensis/index.php',
        headers: {
            'Host': 'localhost:8888',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:50.0) Gecko/20100101 Firefox/50.0',
            'Connection': 'keep-alive'
        },
        form: {
            'USERNAME': username,
            'PASSWORD': password
        },
        resolveWithFullResponse: true
    };

    request(opts, function (err, res, body) {
        if (err)
            console.log("gettoken 52: " + err);
        var token = res.headers['set-cookie'][0].split(';')[0];

        callback(token);
    })

};

// this.getTokenMoodle('admin', '12345', function (token) {
//     console.log(token)
// });
module.exports.getTokenMoodle = function (username, password, callback) {
    var opts = {
        method: 'POST',
        url: 'http://localhost:8888/moodle27/login/index.php',
        headers: {
            'Host': "localhost:8888",
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:50.0) Gecko/20100101 Firefox/50.0',
            'Connection': 'keep-alive',
        },
        form: {
            'username' : username,
            'password' : password
        }
    };

    request(opts, function (err, res, body) {
        if (err)
            console.log(err);
        var token = res.headers['set-cookie'][1].split(';')[0];
        callback(token);
    });
};
