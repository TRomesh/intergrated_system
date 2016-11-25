/**
 * Created by NarX on 11/25/16.
 */
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var options = {
    url: 'http://localhost:8888/openemis-school/Classes',
    headers: {
        'Host': 'localhost:8888',
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:50.0) Gecko/20100101 Firefox/50.0",
        'Accept': "text/html, */*; q=0.01",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate",
        'Referer': "http://localhost:8888/openemis-school/Dashboard",
        'Cookie': "CAKEPHP=e3181936f42dbefd62876d7194cef111",
        'Connection': "keep-alive"
    }
};

function fetch_data(url, token, callback) {
    var options= {
        url: url,
        headers: {
            'Host': 'localhost:8888',
            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:50.0) Gecko/20100101 Firefox/50.0",
            'Accept': "text/html, */*; q=0.01",
            'Accept-Language': "en-US,en;q=0.5",
            'Accept-Encoding': "gzip, deflate",
            'Referer': "http://localhost:8888/openemis-school/Dashboard",
            'Cookie': token,
            'Connection': "keep-alive"
        }
    };
    // callback (err, response, body)
    request(options, callback);
}

module.exports=fetch_data;
// request(options, function(err, res, body){
//     var result = [];
//     $ = cheerio.load(body);
//     $('tbody').children().each(function (i) {
//         var tmpClass = {};
//         $(this).children().each(function (e) {
//
//             if (e == 0)
//                 tmpClass.name = $(this).text();
//             else if (e == 2)
//                 tmpClass.numberseat = $(this).text();
//         });
//         result.push(tmpClass);
//     });
//     console.log(result);
// });

