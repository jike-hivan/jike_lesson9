var selectedItem;
var dataID = 1;
var newsTitle = "";
var newImg = "";
var newsContent = "";
var addTime = "";



jQuery(document).ready(function($) {
    // 默认登录后台后展
    selectedItem = 'recom';
    getMsg();
  // 查找 - 对应后端的按钮
  $('.click-data').bind('click', function() {
    selectedItem = $(this).attr('value');
    getMsg();
  })

  // 更改 对应后端的按钮
  $('#mdfHide').click(function() {
    $('#modify').slideUp(200);
  });
  $('#mdfUpDate').click(function() {
    $.ajax({
      url: '/update',
      type: 'post',
      dataType: 'json',
      data: {
        'tag': $('#mdfTable').val(),
        'id': $('#mdfId').val(),
        'title': $('#mdfTitle').val(),
        'image': $('#mdfImg').val(),
        'content': $('#mdfCon').val(),
        'time': $('#mdfTime').val()
      },
      success: function(data) {
        $('#mdfInfo').text(data['result']);
        $('#modify').slideUp(200);
        getMsg();
        console.log(data['result']);
      }
    })
  });

  // 删除 对应后端按钮
  $('#deleteBtn').click(function() {
    $.ajax({
      url: '/delete',
      type: 'post',
      dataType: 'json',
      data: {
        'id': dataID
      },
      success: function(data) {
        $('#info').text('信息删除成功');
        $('#delete').hide(200);
        getMsg();
      }
    });
  });

  $('#cancelBtn').click(function() {
    $('#delete').hide();
  })

  // 增加 对应后端按钮
  $('#addBtn-face').click(function() {
    if (selectedItem) {
      $('#add').show();
      $('#addInfo').text('输入信息');
    }
  });

  $('#addSave').click(function() {
    var newsTitleAdd = $('#newsTitle').val();
    var newImgAdd = $('#newImg').val();
    var newsContentAdd = $('#newsContent').val();
    var addTimeAdd = $('#addTime').val();
    if (!newsTitleAdd) {
      alert('请输入标题');
      return;
    }
    if (!newImgAdd) {
      alert('请输入图片');
      return;
    }
    if (!newsContentAdd) {
      alert('请输入内容');
      return;
    }
    if (!addTimeAdd) {
      alert('请输入时间');
      return;
    }
    $.ajax({
      url: '/insert',
      type: 'post',
      dataType: 'json',
      data: {
        'tag': selectedItem,
        'title': newsTitleAdd,
        'image': newImgAdd,
        'content': newsContentAdd,
        'time': addTimeAdd
      },
      success: function(data) {
        console.log(data);
        $('#addInfo').text(data['result']);
        $('#add').hide(200);
        getMsg();
      }
    });
  });

  $('#addCancel').click(function() {
    $('#add').slideUp(200);
  });
});

// 现实消息条目
function getMsg() {
  dataID = '';
  $('#data').empty();
  $.ajax({
    url: '/select',
    type: 'post',
    dataType: 'json',
    data: {
      'tag': selectedItem,
      'dataID': ''
    },
    success: function(data) {
      for (var i = 0; i < data.length; i++) {
        var tr = $('<tr></tr>');

        var newsId = $('<td></td>').text(data[i]['id']);
        var newsTitle = $('<td></td>').text(data[i]['title']);
        var addTime = $('<td></td>').text(data[i]['time'].substring(0, 10));
        var itemImg = $('<img style="height: 50px;">');
        itemImg.attr('src', data[i]['image']);
        var newsImg = $('<td></td>');
        var newsContent = $('<td></td>').text('...');
        var addBtn = $("<button class='btn btn-warning'  onclick = 'showModify(this.value)'> 修改 </button>");
        addBtn.val(data[i]['id']);
        var dleBtn = $("<button class='btn btn-danger'  onclick = 'removeClick(this.value)'> 删除 </button>");
        dleBtn.val(data[i]['id']);

        newsImg.append(itemImg);
        tr.append(newsId);
        tr.append(newsTitle);
        tr.append(addTime);
        tr.append(newsImg);
        tr.append(newsContent);
        tr.append(addBtn);
        tr.append(dleBtn);
        $('#data').append(tr);
      }
    }
  })
}

// 修改按钮
function showModify(obj) {
  $('#modify').slideDown(200);
  dataID = obj;
  $.ajax({
    url: '/select',
    type: 'post',
    dataType: 'json',
    data: {
      'tag': selectedItem,
      'id': dataID
    },
    success: function(data) {
      $('#mdfId').val(data[0]['id']);
      $('#mdfTable').val(data[0]['tag']);
      $('#mdfTitle').val(data[0]['title']);
      $('#mdfImg').val(data[0]['image']);
      $('#mdfTime').val(data[0]['time'].substring(0, 10));
      $('#mdfCon').text(data[0]['content']);
    }
  })
}

// 删除按钮
function removeClick(str) {
  dataID = str;
  $('#delete').show();
  $('#info').text('确定要删除吗？');
}
