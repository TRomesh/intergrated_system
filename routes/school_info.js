/**
 * Created by magic_000 on 21/12/2016.
 */
var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var getRequest = require('../config/get_request');
var request = require('request');

router.get('/', function (req, res, next) {
    require('../config/getToken').getTokenEmis('admin', '12345678', function (token) {
        getRequest('http://localhost:8888/openemis-school/Dashboard', token, function (err, response, body) {
            if (err)
                console.log(err);

            var $ = cheerio.load(body);
            var school_info = {};

            school_info._path = 'school_show';

            $('tbody').children().each(function (i) {

                if (i == 0) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.code = $(this).text();
                        }
                    })
                } else if (i == 1) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.address = $(this).text();
                        }
                    })
                } else if (i == 2) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.name = $(this).text();
                        }
                    })
                } else if (i == 3) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.postalcode = $(this).text();
                        }
                    })
                } else if (i == 5) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.phone = $(this).text();
                        }
                    })
                } else if (i == 7) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.email = $(this).text();
                        }
                    })
                } else if (i == 8) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.website = $(this).text();
                        }
                    })
                } else if (i == 9) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.opendate = $(this).text();
                        }
                    })
                } else if (i == 10) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.closedate = $(this).text();
                        }
                    })
                }
            });
            res.render('school_edit', {school_info : school_info});
        });
    });
});

router.get('/edit', function (req, res, next) {
    require('../config/getToken').getTokenEmis('admin', '12345678', function (token) {
        getRequest('http://localhost:8888/openemis-school/Dashboard', token, function (err, response, body) {
            if (err)
                console.log(err);

            var $ = cheerio.load(body);
            var school_info = {};

            school_info._path = 'school_edit';

            $('tbody').children().each(function (i) {

                if (i == 0) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.code = $(this).text();
                        }
                    })
                } else if (i == 1) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.address = $(this).text();
                        }
                    })
                } else if (i == 2) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.name = $(this).text();
                        }
                    })
                } else if (i == 3) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.postalcode = $(this).text();
                        }
                    })
                } else if (i == 5) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.phone = $(this).text();
                        }
                    })
                } else if (i == 7) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.email = $(this).text();
                        }
                    })
                } else if (i == 8) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.website = $(this).text();
                        }
                    })
                } else if (i == 9) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.opendate = $(this).text();
                        }
                    })
                } else if (i == 10) {
                    $(this).children().each(function (k) {
                        if (k==1) {
                            school_info.closedate = $(this).text();
                        }
                    })
                }
            });
            res.render('school_edit', {school_info : school_info});
        });
    });

});

router.post('/edit', function (req, res, next) {
    require('../config/getToken').getTokenEmis('admin', '12345678', function (token) {
        var schoolname = req.body.schoolname;
        var code = req.body.code;
        var email = req.body.email;
        var address = req.body.address;
        var postalcode = req.body.postalcode;
        var phone = req.body.phone;
        var website = req.body.website;
        var opendate = req.body.opendate;
        var closedate = req.body.closedate;

        console.log(token);

        var formData = {
            "_method" : "PUT",
            "data[InstitutionSite][id]" : "1",
            "data[InstitutionSite][name]" : schoolname,
            "data[InstitutionSite][code]" : code,
            "data[InstitutionSite][address]": address,
            "data[InstitutionSite][postal_code]" : postalcode,
            "data[InstitutionSite][country_id]": "243",
            "data[InstitutionSite][telephone]": phone,
            "data[InstitutionSite][email]" : email,
            "data[InstitutionSite][website]" : website,
            "data[InstitutionSite][date_opened]" : opendate,
            "data[InstitutionSite][date_closed]" : closedate,
            "filename":"",
            "data[InstitutionSite][photo_content]" : '',
            "data[InstitutionSite][latitude]" : "12323"
        }
        var headers = {
            'Host': 'localhost:8888',
            'Cookie': "CAKEPHP=a1jluect1g8nttiu6sjpa22cs2",
            'Connection': "keep-alive",
            "Upgrade-Insecure-Requests": "1"
        }

        request.post({
            url:'http://localhost:8888/openemis-school/Admin/edit/1',
            formData: formData,
            headers: headers,
        }, function (err, response, body) {
            if (err) {
                console.log(err);
            } else {
                console.log("success");
            }
        });
    });
});


module.exports = router;