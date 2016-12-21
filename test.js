/**
 * Created by magic_000 on 26/11/2016.
 */



var cheerio = require('cheerio');
var getRequest = require('./config/get_request');
var request = require('request');


require('./config/getToken').getTokenEmis('admin', '12345@Bc', function (token) {
    console.log(token);
    getRequest("http://localhost:8888/openemis-school/Students/add", token, function (err, res, body) {
        var $ = cheerio.load(body);
        var id_student = $('#SecurityUserOpenemisid').val();
        console.log(id_student);

        var formData = {
            "_method": "POST",
            "data[SecurityUser][openemisid]": id_student,
            "data[SecurityUser][first_name]": "Hong Thanh",
            "data[SecurityUser][middle_name]": "V",
            "data[SecurityUser][last_name]": "gen",
            "data[SecurityUser][date_of_birth]": "20-12-2016",
            "data[SecurityUser][country_id]": '16',
            "data[SecurityUser][gender]": "M",
            "data[SecurityUser][postal_code]": "100000",
            "data[Student][start_date]": "20-12-2016",
            "data[Student][student_status_id]": "1",
            "data[SecurityUser][username]": "thanhnk",
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



