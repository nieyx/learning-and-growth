$(function () {
    //当鼠标移动到tab栏上的时候有，改变tab栏的样式
    $(".j_tab li").hover(function () {
        $(this).addClass("current")
            .siblings()
            .removeClass("current")
            .end()
            .children("span")
            .show()
            .end()
            .siblings()
            .children("span")
            .hide();
        //当tab栏变化是，下面的显示内容跟着改变
        var index = $(this).index();
        $(".mainmian ul ").eq(index).show().siblings().hide();
    }, function () {
        $(this).children("span")
            .show()
            .end()
            .siblings()
            .children("span")
            .hide();
    })
    //点击立即购买的
    $(".j_tbmain li div span").click(function () {
        alert("下次早点来，卖完啦");
    })
});



