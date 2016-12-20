/**
 * Created by NarX on 12/20/16.
 */
var request = require('request');

function post_req(url, token, form, callback) {
    var opts = {
        method: 'POST',
        url: url,
        headers : {
            'Host': 'locahost:8888',
            'Cookie': token,
            'Connection': 'keep-alive'
        },
        form: form
    };

    request(opts, callback);
}

module.exports=post_req;