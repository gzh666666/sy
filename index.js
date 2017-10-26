var express = require('express');
var router = express.Router();
var fs=require('fs');
/* GET home page. */
router.post('/', function(req, res, next) {
    // res.readFile("public/wenjian.txt","utf-8",function(err,data){
    res.header('Access-Control-Allow-Origin','*')    ;
   fs.readFile("public/wenjian.txt","utf-8",function(err,data){
       var str=JSON.parse(data);
       str.push({name:req.body.name,title:req.body.title});
       console.log(str);
       fs.writeFile('public/wenjian.txt',JSON.stringify(str),function(err){
           fs.readFile("public/wenjian.txt","utf-8",function(err,ccc){
               var data=JSON.parse(ccc);
               res.send({name:data})

           })
       })
   })
});
 module.exports = router;
