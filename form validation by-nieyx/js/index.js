/**
 * Created by 聂宇昕 on 2016/4/3.
 */

$(function () {
  /*上传图片的部分*/

  $('#photo').change(function (e) {

    /*判断条件是否符合*/
    var val = $('input[type=file]').val().split('\\').pop();

    /*截取点之后的文件类型*/
    var valNum= val.indexOf('.');

    var valType = val.substr(valNum + 1).toUpperCase();

    /*判断文件的大小,转化成M*/
    var size = $('input[type=file]')[0].files[0].size/1024/1024;

    console.log('文件大小是'+size);

    debugger

    if(size >= 3) {

      popUp('文件太大，请重新输入');

    } else if(valType != 'JPG' && valType != 'PNG'){

      popUp('文件类型不正确，请重新输入');

    } else {
      /*判断类型，如果是jpg或者是png，则将文件的路径添加到src属性中*/
      /*引用图片的插件*/
      
      var file = e.target.files[0];

      var reader = new FileReader();

      reader.onload = function(e){

        $("#img").attr({'src':e.target.result});
      }
      reader.readAsDataURL(file);
    };
  });









  /*保存按钮部分*/
  $('#save').click(function(){

    var html = '';

    if($('#phoneConfirm').html() != "已验证"){

      html = "手机号码未验证，请重新确认手机号码"

    }else if($('#emailConfirm').html() != "已验证"){

      html = "邮箱号码未验证，请重新确邮箱号码"

    } else{

      html = '恭喜你，保存成功';

      $('#noteMessage').html();

    };
    popUp(html)
  });

  /*正则匹配的公式*/
  /*手机正则匹配*/
  var rePhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
  /*邮箱正则匹配*/
  var reEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  /*手机号码的验证*/
  Confirm('#subNum','.mphone','#phoneConfirm',rePhone);

  /*邮箱的验证*/
  Confirm('#subEmail','.memail','#emailConfirm',reEmail);

  /*当点击修改的时候，将input中的内容readonly属性移除*/
  $('.modify').click(function () {

    $(this).parent().find('input').removeAttr('readonly').focus();

  })


  /*兴趣爱好部分*/
  $('.hobby').children().click(function () {

    var valOld = $('#hobby').val();

    $(this).toggleClass('modifySpan');

    if($(this).hasClass('modifySpan')){

      var val = valOld +'  #'+$(this).html();

    } else {
      // debugger
      var relaceValue='#'+$(this).html();

      var val = $('#hobby').val().replace(relaceValue, '').trim();
    }
    $('#hobby').val(val);

  })

  /*点击弹出框的信息确定之后，会关闭弹出框*/
  $('#noteConfirme').click(function () {

    $(this).parent().css('display','none');
  })

  /*封装的验证函数*/
  function Confirm(id,idchange,idconfirm,repx){

    $(id).blur(function(){

      $(id).attr('readonly','readonly').removeClass().addClass('notModify');;

      $(this).parent().find(idchange).css('display','inline-block');

      if($(id).val() == ''){

        $(idconfirm).html('不能为空');

      } else {

        var result = repx.test($(id).val());

        if(result){

          $(idconfirm).html('已验证');

          hideNum(id);
        }else{

          return $(idconfirm).html('格式不正确,请重新输入');
        }
      }
    });
  };

  /*隐藏手机号码的中间为位数的函数*/
  function hideNum(id){

    var phone=$(id).val();

    var myphone=phone.substr(3,4);

    var lphone=phone.replace(myphone,"****");

    $(id).val(lphone);
  }
  
  /*弹出框显示的函数*/
  function popUp(mes) {

    $('#note').css('display','block');

    $('#noteMessage').html(mes);
    
  }
});