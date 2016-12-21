/**
 * Created by magic_000 on 20/12/2016.
 */
var getToken = require('./getToken');
var request = require('request');
var cheerio = require('cheerio');
var get_request = require('./get_request');


var token_emis;

function getStudentIdForCreate(callback) {
    require('../model/users').findUserByUsername('admin').then(function (user) {
        var token_emis = user.token_emis;
        token_emis = user.token_emis;
        get_request('http://localhost:8888/openemis-school/Students/add', token_emis, function (err, res, body) {
            var $ = cheerio.load(body);
            var id_student = $('#SecurityUserOpenemisid').val();
            console.log(id_student);
            //todo: submit form to create student
            callback(id_student);
        });


    }, function (err) {
        //almost never run here
    });
}

function create_student_emis(first_name, middle_name, last_name, birthday, gender, startdate, _username, _password, callback) {
    getStudentIdForCreate(function (id_student) {
        var formData = {
            "_method": "POST",
            "data[SecurityUser][openemisid]": id_student,
            "data[SecurityUser][first_name]": first_name,
            "data[SecurityUser][middle_name]": middle_name,
            "data[SecurityUser][last_name]": last_name,
            "data[SecurityUser][date_of_birth]": birthday,
            "data[SecurityUser][country_id]": "243",
            "data[SecurityUser][gender]": gender,
            "data[SecurityUser][postal_code]": "100000",
            "data[Student][start_date]": startdate,
            "data[Student][student_status_id]": "1",
            "data[SecurityUser][username]": _username,
            "data[SecurityUser][password]": _password,
        }
        var headers = {
            'Host': 'localhost:8888',
            'Cookie': token_emis,
            'Connection': "keep-alive",
            "Upgrade-Insecure-Requests": "1"
        }

        request.post({
            formData: formData,
            headers: headers,
        }, function (err, res, body) {
            callback();
        });

    });
}
function create_student_emis_2(first_name, middle_name, last_name, birthday, gender, startdate, _username, _password, callback) {
    require('./config/getToken').getTokenEmis('admin', '12345678', function (token) {
        console.log(token);
        getRequest("http://localhost:8888/openemis-school/Students/add", token, function (err, res, body) {
            var $ = cheerio.load(body);
            var id_student = $('#SecurityUserOpenemisid').val();
            console.log(id_student);

            var formData = {
                "_method": "POST",
                "data[SecurityUser][openemisid]": id_student,
                "data[SecurityUser][first_name]": first_name,
                "data[SecurityUser][middle_name]": middle_name,
                "data[SecurityUser][last_name]": last_name,
                "data[SecurityUser][date_of_birth]": birthday,
                "data[SecurityUser][country_id]": "243",
                "data[SecurityUser][gender]": gender,
                "data[SecurityUser][postal_code]": "100000",
                "data[Student][start_date]": startdate,
                "data[Student][student_status_id]": "1",
                "data[SecurityUser][username]": _username,
                "data[SecurityUser][password]": _password,
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
                    callback();
                }

            });


        });
    });
}


module.exports.create_student= create_student_emis;

module.exports.create_student_2=create_student_emis_2;