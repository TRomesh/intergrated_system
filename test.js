/**
 * Created by magic_000 on 26/11/2016.
 */



/*var cheerio = require('cheerio');
 var getRequest = require('./config/get_request');
 var request = require('request');


 require('./config/getToken').getTokenMoodle('admin', '12345@Bc', function (token) {
 console.log(token);
 // getRequest('http://localhost:8888/moodle27/', token, function (err, res, body) {
 // console.log(body);
 // })

 });*/

// getRequest('http://localhost:8888/moodle27/', 'MoodleSessionm27=1fbbf41fbb7d2f95421aefe501e7683a', function (err, res, body) {
//     console.log(body);
// })
/*getRequest('http://localhost:8888/openemis-school/Dashboard',
 'CAKEPHP=k8aipdbjklasc1auoqo3kr85m3', function (err, res, body) {
 console.log(body);
 })*/

/*var token_admin = "c196c18bed37d31bcea0b8829557e402";
var request = require('request');
var domainname = 'http://localhost:8888/moodle32';
var token = token_admin;
var functionname = 'core_user_create_users';
var serverurl = domainname + '/webservice/rest/server.php';
var userstocreate = [{
    username: 'testusername1',
    password: '12345@Bc',
    firstname: 'testfirstname1',
    lastname: 'testlastname1',
    email: 'testemail1@moodle.com',
    auth: 'manual',
    idnumber: 'testidnumber1',
    lang: 'en',
    theme: 'standard',
    timezone: '-12.5',
    mailformat: 0,
    description: 'Hello World!',
    city: 'testcity1',
    country: 'au',
    preferences: [
        {type: 'preference1', value: 'preferencevalue1'},
        {type: 'preference2', value: 'preferencevalue2'}
    ]
},
    {
        username: 'testusername2',
        password: 'testpassword2',
        firstname: 'testfirstname2',
        lastname: 'testlastname2',
        email: 'testemail2@moodle.com',
        timezone: 'Pacific/Port_Moresby'
    }
];

var function_name='core_user_create_users';

var data = {
    wstoken: "c196c18bed37d31bcea0b8829557e402",
    wsfunction: function_name,
    moodlewsrestformat: 'json',
    users: userstocreate
};


var option={
    method: "POST",
    url: serverurl,
    data: data
}
request(option, function (err, res, body) {
    console.log(JSON.stringify(res));
});*/

var moodle_client= require('moodle-client');
moodle_client.init({
   wwwroot: "http://localhost:8888/moodle32",
    token :'e5971b30a7e8d935d04b5cff02ef4152'
    /*username: "thanh",
    password: "12345@Bc"*/

}).then(function (client) {
    console.log("OKOK");
    client.call({
        wsfunction: "core_user_create_users",
        method: "POST",
        args:{
            users:[{
                username: 'testusernasda',
                password: 'testpassworD@2',
                firstname: 'testfirstnda',
                lastname: 'testlastname2',
                email: 'testel5@moodle.com',
                timezone: 'Pacific/Port_Moresby'
            }]
        }
    }).then(function (res) {
        console.log(res);
    }).catch(function (err) {
        console.log(err)
    })
}).catch(function (err) {
    console.log(err);
});