var express = require('express');
var orm = require('orm');

// setting the mysql server
// use the orm
var dbserver = '@localhost:8889/';
var dbusername = 'root';
var dbpassword = 'root';
var dbname = 'baidu';

// export the router
module.exports = function(router) {
  // setting database
  router.use(orm.express("mysql://" + dbusername + ":" + dbpassword + dbserver + dbname, {
    dbfine: function(db, models, next){
      models.News = db.define('news', {
        id: Number,
        title: String,
        image: String,
        content: String,
        time: Date,
        tag: ['recom', 'baijia', 'local', 'fun', 'society', 'img']
      });
      next();
    }
  }))

  // database handle
  var dbs = {

    // 传递不同的id和tag来达到查询数据
    selectData: function(req, res, next){
      var selectJson;
      if (req.body.id == undefined) {
        selectJson = {
          tag: req.body.tag
        };
      }else{
        selectJson = {
          id: req.body.id
        };
      }

      req.models.News.find(selectJson, function(err, News){
        if (err) {
          return console.log('Connection error: ' + err);
        }
        console.log(News);
        res.locals.News = News;
        next();
      })
    }
  }

  return dbs;
}
