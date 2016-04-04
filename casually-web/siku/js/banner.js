/**
 * Created by zjh on 2015/12/20.
 */
$(function () {
    //banner霓虹灯效果
    // 初始化，开始autoplay
    var timer_odd = setInterval(function () {
        autoPlay($(".banner > a:odd"));
    },800);
    var timer_even = setInterval(function () {
        autoPlay($(".banner > a:even"));
    },1000);

    function autoPlay(obj) {
        obj.toggleClass("cur");
    }

    //折扣冒泡效果
    $(".banner-ro").on("mousemove", function (e) {
        var width = $(".banner-bg-ro").width()/2;
        var height = $(".banner-bg-ro").height();
        $(".banner-bg-ro").css({
            left: e.pageX - width,
            top: e.pageY - 196 - height,
            display: "block"
        });
    }).on("mouseleave", function () {
        $(".banner-bg-ro").css({
            display: "none"
        });
    });

    $(".banner-mb").on("mousemove", function (e) {
        var width = $(".banner-bg-mb").width()/2;
        var height = $(".banner-bg-mb").height();
        $(".banner-bg-mb").css({
            left: e.pageX - width,
            top: e.pageY - 196 - height,
            display: "block"
        });
    }).on("mouseleave", function () {
        $(".banner-bg-mb").css({
            display: "none"
        });
    });

    $(".banner-ys").on("mousemove", function (e) {
        var width = $(".banner-bg-ys").width()/2;
        var height = $(".banner-bg-ys").height();
        $(".banner-bg-ys").css({
            left: e.pageX - width,
            top: e.pageY - 196 - height,
            display: "block"
        });
    }).on("mouseleave", function () {
        $(".banner-bg-ys").css({
            display: "none"
        });
    });
});