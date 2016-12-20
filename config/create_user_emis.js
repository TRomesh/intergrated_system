/**
 * Created by magic_000 on 20/12/2016.
 */
var getToken=require('./getToken');
var request=require('request');
var cheerio=require('cheerio');
var get_request=require('./get_request');



function getStudentIdForCreate(callback) {
    require('../model/users').findUserByUsername('admin').then(function (user) {
        var token_emis=user.token_emis;
        get_request('http://localhost:8888/openemis-school/Students/add', token_emis, function (err, res, body) {
            var $= cheerio.load(body);
            var id_student= $('#SecurityUserOpenemisid').val();
            console.log(id_student);


            //todo: emit form to create student


        });


    }, function (err) {

    });


}

function create_student(id, first_name, middle_name, last_name, dob, nation, gender,  ) {
    
}

