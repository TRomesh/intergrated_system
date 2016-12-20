/**
 * Created by NarX on 11/25/16.
 */
var request = require('request');

function fetch_data(url, token, callback) {
    var options= {
        url: url,
        headers: {
            'Host': 'localhost:8888',
            'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,*!/!*;q=0.8",
            'Cookie': token,
            'Connection': "keep-alive",
            "Upgrade-Insecure-Requests":"1"
        }
    };
    // callback (err, response, body)
    request(options, callback);
}

module.exports=fetch_data;

/*Host: localhost
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*!/!*;q=0.8
 Accept-Language: en-US,en;q=0.5
 Accept-Encoding: gzip, deflate
 Referer: http://localhost/openemis-school/Dashboard
 Cookie: CAKEPHP=u2fdl4329qe3kcufcf7utnrqr0
 Connection: keep-alive
 Upgrade-Insecure-Requests: 1*/

