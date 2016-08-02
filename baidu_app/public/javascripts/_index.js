define(function(require, exports, module){
  var $ = require('seajq');
  var i = {};

  // 绑定导航条的点击事件
  i.click = function(){
    $('.nav-btn').bind('click', function(){
      $('.index-navigator').find('span').removeClass('cur');
      $(this).find('span').addClass('cur');
      navClick($(this).attr('value'));
      console.log($(this).attr('value'));
    })
  }

  function navClick(tableName){
    $('.index-content-items-inner').empty();
    $.ajax({
      url: '/select',
      type: 'post',
      dataType: 'json',
      data:{
        'tag': tableName
      },
      success: function(data){
        console.log(data);
        for(var i = 0; i < data.length; i++){
          var conDiv = $('<li class="index-content-item"></li>');
          var h4 = $('<h4></h4>');
          var itemTime = $('<time></time>');
          var itemImg = $('<img>');

          h4.text(data[i]['title']);
          itemTime.text(data[i]['time'].substring(0, 10));
          itemImg.attr('src', data[i]['image']);
          conDiv.append(itemImg);
          conDiv.append(itemTime)
          conDiv.append(h4);
          // 将内容插入item
          $('.index-content-items-inner').append(conDiv);
        }
      }
    });
  }

  module.exports = i;
})