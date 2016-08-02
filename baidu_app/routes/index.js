var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var orm = require('orm');
var dbs = require('../dbs/dbs')(router);

// var fs = require('fs');
// var logs = require('log');
// var stream = fs.createReadStream(__dirname + '/file.log');

/* GET home page. */
router.get('/', function(req, res, next) {
  // var log = new logs('debug', stream);
  // console.log(log);

  res.render('index', { title: '百度新闻首页' });
});

// GET admin page
router.get('/admin', function(req, res, next) {
  // var log = new logs('debug', stream);
  // console.log(log);
  res.render('admin', { title: '百度新闻管理页' });
});

router.post('/select', dbs.selectData, function(req, res){
  // console.log(res.locals.News);
  res.send(res.locals.News);
});

router.post('/update', dbs.updateData, function(req,res){
  res.send(res.locals.News);
});

router.post('/insert', dbs.insertData, function(req, res) {
  res.send(res.locals.News);
});

router.post('/delete', dbs.deleteData, function(req,res){
  res.send(res.locals.News);
})


module.exports = router;