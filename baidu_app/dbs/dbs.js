var express = require('express');
var orm = require('orm');

// server setting
// use orm 
var server = '@localhost:8889/';
var dbusername = 'root';
var dbpassword = 'root';
var dbname = 'baidu';

// export the router
module.exports = function(router) {

  // database setting
  router.use(orm.express('mysql://' + dbusername + ':' + dbpassword + server + dbname, {
    define: function(db, models, next){
      models.News = db.define('news', {
        id: Number,
        title: String,
        image: String,
        content: String,
        time: Date,
        tag: ['recom', 'baijia', 'local', 'society', 'img', 'fun']
      });
      next();
    }
  }))

  // 数据库操作
  var dbs = {

    // 查询数据库
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
          return console.error('Connection error: ' + err);
        }
        console.log(News);
        res.locals.News = News;
        next();
      })
    },

    // 插入数据
    insertData: function(req,res,next){
      console.log(req.body.title);
      req.models.News.create({
        title: req.body.title,
        image: req.body.image,
        content: req.body.content,
        time: req.body.time,
        tag: req.body.tag
      }, function(err, News){
        if (err) {
          return console.error('Connection error: ' + err);
        }
        res.locals.News = {
          'result': '成功插入了'
        };
        next();
      })
    },

    // 删除数据
    deleteData: function(req, res, next){
      req.models.News.find({
        id: req.body.id
      }, function(err, News){
        if (err) {return console.error('Connection Error: '+err);}
        News[0].remove(function(err){
          if (err) {return console.error('Connection error: ' + err);}
          res.locals.News = {
            'result': '数据删除成功'
          };
          next();
        })
      })
    },

    // 修改数据
    updateData: function(req, res, next){
      req.models.News.find({
        id: req.body.id
      }, function(err, News){
        if (err) {return console.error('Connection Error: '+err);}
        News[0].title = req.body.title;
        News[0].image = req.body.image;
        News[0].content = req.body.content;
        News[0].time = req.body.time;
        News[0].save(function(err){
          if (err) {return console.error('Connection Error: '+err);}
          res.locals.News = {
            'result': '修改成功'
          };
          next();
        });
      });
    }
  }

 return dbs;
}
