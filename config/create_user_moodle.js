/**
 * Created by NarX on 12/20/16.
 */

var request = require('request');
var getToken = require('./getToken');

function create_user(token, form, callback) {
    var opts = {
        method: 'POST',
        url : 'http://localhost:8888/moodle27/user/editadvanced.php',
        headers: {
            'Host': 'locahost:8888',
            'Cookie': token,
            'Connection': 'keep-alive'
        },
        form: form
    };

    request(opts, callback);
}