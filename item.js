var express = require('express');
var router = express.Router();
var mysql= require('mysql'); //引用模块
var connection = mysql.createPool({//创建链接
    host     : 'localhost',
    user     : 'root',
    password : 'root'
});
/* GET home page. */
router.post('/list', function(req, res, next) {

    res.header('Access-Control-Allow-Origin','*');//跨域
    var a=req.body.val;
    console.log(a);
    connection.query(`SELECT * FROM baby.sousuo WHERE name LIKE '%${a}%'`, function(err, rows, fields) {
        res.send(rows);
        console.log(rows)
    })
});


module.exports = router;
