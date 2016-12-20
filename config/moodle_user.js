/**
 * Created by NarX on 12/20/16.
 */
var request = require('request');

var createMoodleUser = function (newUser, callback) {

    var opts = {
        method: 'POST',
        url: 'http://localhost:8888/moodle27/user/editadvanced.php',
        headers: {
            'Host': 'localhost:8888',
            'Referer': 'http://localhost:8888/moodle27/user/editadvanced.php',
            'Cookie': 'MoodleSessionm27=284c7de1367d529dcfb42365af2f54b9; connect.sid=s%3AX7mL3WxKztfNqLYkopECT8Mqdbx5KzY-.y8Ldm25Byn8VI39VePtsjjFoQBnodqZIVpki0edb0c4; PHPSESSID=d3c243cd6bada82e6a7d48a5feef32d9; CAKEPHP=9ac869cbe91418c3fc1785cf88287423',
            'Connection': 'keep-alive'
        },
        form: {
            'course': '1',
            'sesskey': 'Nh0Emzujep',
            '_qf__user_editadvanced_form': "1",
            'mform_isexpanded_id_moodle':"1",
            'mform_isexpanded_id_moodle_picture':"0",
            'mform_isexpanded_id_moodle_additional_names':"0",
            'mform_isexpanded_id_moodle_interests':"0",
            'mform_isexpanded_id_moodle_optional':"0",
            'username': newUser.username,
            'auth':"manual",
            'suspended':"0",
            'newpassword': newUser.password,
            'preference_auth_forcepasswordchange':"0",
            'firstname': newUser.firstname,
            'lastname': newUser.lastname,
            'email': newUser.email,
            'maildisplay':"2",
            'mailformat':"1",
            'maildigest':"0",
            'autosubscribe':"1",
            'trackforums':"0",
            'timezone':"99",
            'lang':"en",
            'description_editor[format]':"1",
            'imagefile':"302378441",
            'submitbutton':"Create+user"
        }
    };

    request(opts, callback);
};

module.exports.createMoodleUser = createMoodleUser;