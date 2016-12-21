/**
 * Created by NarX on 12/21/16.
 */
var domainname = 'http://localhost:8888/moodle32';
var token = '4a8c29b28c3bf75d648b0e662bb213f9';
var functionname = 'core_user_create_users';
var serverurl = domainname + '/webservice/rest/server.php';
//add params into data
var userstocreate = [{
    username: 'testusername1',
    password: 'testpassword1',
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
var data = {
    wstoken: token,
    wsfunction: functionname,
    moodlewsrestformat: 'json',
    users: userstocreate
}
var request= require('request');
request({
    url: serverurl,
    method: "POST",
    form: data,

}, function (err, res, body){
    if(err){
        console.log(err);
    }
    console.log(body);
});