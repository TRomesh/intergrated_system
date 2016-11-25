/**
 * Created by NarX on 11/25/16.
 */
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var options = {
    url: 'http://localhost:8888/openemis-school/Students/search',
    headers: {
        'Host': 'localhost:8888',
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:50.0) Gecko/20100101 Firefox/50.0",
        'Accept': "text/html, */*; q=0.01",
        'Accept-Language': "en-US,en;q=0.5",
        'Accept-Encoding': "gzip, deflate",
        'Referer': "http://localhost:8888/openemis-school/Dashboard",
        'Cookie': "CAKEPHP=4edf98d5599c38a819a0ad71a6d9e328",
        'Connection': "keep-alive"
    }
};

function  fetch_data(url, token, callback) {
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
/*request(options, function(err, res, body){
    $ = cheerio.load(body);
    $('tbody').children().each(function (i) {
        $(this).children().each(function (e) {
            console.log($(this).text());
        })
    })
});*/

