/**
 * Created by magic_000 on 26/11/2016.
 */



var cheerio = require('cheerio');
var getRequest = require('./config/get_request');
var request = require('request');


require('./config/getToken').getTokenEmis('admin', '12345678', function (token) {
    console.log(token);
    getRequest("http://localhost:8888/openemis-school/Students/add", token, function (err, res, body) {
        var $ = cheerio.load(body);
        var id_student = $('#SecurityUserOpenemisid').val();
        console.log(id_student);

        var formData = {
            "_method": "POST",
            "data[Student][id]": "",
            "data[SecurityUser][openemisid]": id_student,
            "data[SecurityUser][first_name]": "Hong Phu",
            "data[SecurityUser][middle_name]": "Vu",
            "data[SecurityUser][last_name]": "genk",
            "data[SecurityUser][date_of_birth]": "20-12-2016",
            "data[SecurityUser][country_id]": '16',
            "data[SecurityUser][gender]": "M",
            "data[SecurityUser][address]": "",
            "data[SecurityUser][postal_code]": "100000",
            "data[Student][start_date]": "20-12-2016",
            "data[Student][start_year]": "",
            "data[Student][student_status_id]": "1",
            "data[Student][security_user_id]": '',
            "data[SecurityUser][username]": "phuvh58",
            "data[SecurityUser][password]": "12345678",

        };

        request.post({
            url: "http://localhost:8888/openemis-school/Students/add",
            formData: formData,
            headers: {
                'Host': 'localhost:8888',
                'Cookie': token,
                'Connection': "keep-alive",
                "Upgrade-Insecure-Requests":"1"
            }
        }, function (err, res, body) {
            if (err) {
                console.log(err);
            } else {
                console.log(JSON.stringify(res));
            }

        });


    });
});

/*getRequest('http://localhost:8888/openemis-school/Dashboard',
 'CAKEPHP=k8aipdbjklasc1auoqo3kr85m3', function (err, res, body) {
 console.log(body);
 })*/


