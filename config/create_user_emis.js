/**
 * Created by magic_000 on 20/12/2016.
 */
var getToken=require('./getToken');
var request=require('request');



function getStudentIdforCreate() {
    require('../model/users').findUserByUsername('admin').then(function (user) {
        var token_emis=user.token_emis;



    }, function (err) {

    });


}

function create_student(id, first_name, middle_name, last_name, dob, nation, gender,  ) {
    
}

