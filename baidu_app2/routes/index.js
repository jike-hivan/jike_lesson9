var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var orm = require('orm');
var dbs = require('../dbs/dbs')(router);

var fs = require('fs'), log = require('log');
var stream = fs.createReadStream(__dirname + '/file.log');


// show the news index page
router.get('/', function(req,res, next){
  log = new log('debug', stream);
  console.log(log);
  res.render('index', {
    title: '百度新闻首页'
  });
});


// render the news admin page
router.get('/admin', function(req,res, next){
  log = new log('debug', stream);
  console.log(log);
  res.render('admin',{
    title: '百度新闻管理界面'
  });
});


// router.post('/select', dbs.selectData, function(req, res){
//   res.send(res.locals.News);
// })


module.exports = router;