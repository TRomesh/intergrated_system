/**
 * Created by magic_000 on 26/11/2016.
 */




var getRequest=require('./config/get_request');


require('./config/getToken').getTokenEmis('admin', '12345678', function (token) {
    console.log(token);
    getRequest("http://localhost:8888/openemis-school/Dashboard", token, function (err, res, body) {
       console.log(body);
    });
});

/*getRequest('http://localhost:8888/openemis-school/Dashboard',
    'CAKEPHP=k8aipdbjklasc1auoqo3kr85m3', function (err, res, body) {
    console.log(body);
})*/


