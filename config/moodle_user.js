var moodle_client = require('moodle-client');

function create_user(username, password, firstname, lastname, email, timezone, callback) {
    moodle_client.init({
        wwwroot: "http://localhost:8888/moodle32",
        token: 'c6e0313a8f24ad2b62e05383c14a3a28'
    }).then(function (client) {
        client.call({
            wsfunction: "core_user_create_users",
            method: "POST",
            args: {
                users: [/*{
                    username: username,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    timezone: timezone
                }*/
                    {  username: 'testusername2',
                        password : 'testpassword2',
                        firstname : 'testfirstname2',
                        lastname : 'testlastname2',
                        email : 'testemail2@moodle.com',
                        timezone : 'Pacific/Port_Moresby'
                    }]
            }
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log("line 24")
        })
    }).catch(function (err) {
        console.log('line 27');
    });
}

create_user("sdvdfvf", "dsvf@Bc", "Phu", "Hong", "mail@mail.com", "GMT+7", function (data) {
    console.log(data);
});


function create_course(fullname, shortname, callback) {
    moodle_client.init({
        wwwroot: "http://localhost:8888/moodle32",
        token: 'e5971b30a7e8d935d04b5cff02ef4152'
    }).then(function (client) {
        client.call({
            wsfunction: "core_course_create_courses",
            method: "POST",
            args: {
                courses: [{
                    fullname: fullname,
                    shortname: shortname,
                    categoryid: 2,
                    summaryformat: 1,
                    showgrades: 0,
                    newsitems: 0,
                    maxbytes: 20971520,
                    showreports: 0,
                    groupmode: 0,
                    groupmodeforce: 0,
                    defaultgroupingid: 0
                }]
            }
        }).then(function (res) {
            console.log(res);
            callback(res);
        }).catch(function (err) {
            console.log(res);
        });
    }).catch(function (err) {
        console.log(err);
    });
}


function enrollUser(roleid, userid, courseid, callback) {
    moodle_client.init({
        wwwroot: "http://localhost:8888/moodle32",
        token: 'e5971b30a7e8d935d04b5cff02ef4152'
    }).then(function (client) {
        client.call({
            wsfunction: "enrol_manual_enrol_users",
            method: "POST",
            enrolments: [
                {
                    roleid: roleid,
                    userid: userid,
                    courseid: courseid
                }
            ]

        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            callback(err);
        })
    }).catch(function (err) {
        console.log(err);
    })
}
function update_user(id, username, password, firstname, lastname, email, timezone, callback) {
    moodle_client.init({
        wwwroot: "http://localhost:8888/moodle32",
        token: 'e5971b30a7e8d935d04b5cff02ef4152'
    }).then(function (client) {
        client.call({
            wsfunction: "enrol_manual_enrol_users",
            method: "POST",
            users: [
                {
                    id: id,
                    username: username,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    timezone: timezone,
                }
            ]
        }).then(function (res) {
            callback(res);
        }).catch(function (res) {
            console.log(res);
        })
    }).catch(function (err) {
        console.log(err);
    })
}


/*update_user(1, "thanh", "12345@Bc", "Thanh__", "KHac", 'thanh@thanh.com', "GMT+7", function (res) {
 console.log(res);
 });*/


/*create_user("phu_vh", "12345@Bc", "Phu", "Hong", "mail@mail.com", "GMT+7", function (data) {
 console.log(data);
 });*/





module.exports.create_course = create_course;
module.exports.create_user = create_user;

