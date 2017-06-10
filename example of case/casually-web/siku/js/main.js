/**
 * Created by wenzhi on 2015/12/20.
 */
$(function () {
    //    侧边导航效果
    var flag = true;
    //   改变nav_item的选中颜色
    function changeItemBac(obj, index) {
        obj.eq(index).css("background", "url(images/louti.png) 116px " + (418 - index * 34) + "px").siblings().attr("style", "");
    };
    //全部奢侈品导航
    $(".searchBar .nav .product-all .product-all-items dl:odd").css("background", "#463b7f");
    $(".searchBar .nav .product-all").hover(function () {
        $(this).children(".product-all-items").css("display", "block");
    }, function () {
        $(this).children(".product-all-items").css("display", "none");
    });
    /*banner的动画*/
    $(".container .banner-text").animate({
        top: "0px", opacity: 1
    }, 1000);
    $(".searchBar .nav .product-all").hover(function () {
        $(this).children("span").children("img").css({
            "-webkit-transform": "rotate(-180deg)",
            " -moz-transform": "rotate(-180deg)",
            " -ms-transform": "rotate(-180deg)",
            " -o-transform": " rotate(-180deg)",
            " transform": "rotate(-180deg)"
        });
    }, function () {
        $(this).children("span").children("img").css({
            "-webkit-transform": "rotate(0deg)",
            " -moz-transform": "rotate(0deg)",
            " -ms-transform": "rotate(0deg)",
            " -o-transform": " rotate(0deg)",
            " transform": "rotate(0deg)"
        });
    });
    $(window).scroll(function () {
        var nav_top = $(this).scrollTop();
        var $louti = $(".louti");
        var $lis = $(".louti ul li");
        //增加main1-title的渐入效果
        if (nav_top > 750) {
            $(".main1 .main1-title").animate({"opacity": 1}, 2000);
        }
        if (nav_top >= 800) {
            if (nav_top < 1100) {
                changeItemBac($lis, 0);

            } else if (nav_top < 1480) {
                changeItemBac($lis, 1);
            }else if(nav_top<3000){
                changeItemBac($lis,5);
            }
            if (flag) {
                $louti.css({"display": "block"});
                $louti.animate({"width": "120px", "height": "580px", "top": "100px"});
                flag = false;
            }

        } else {
            if (!flag) {
                $louti.animate({"width": "0px", "height": "0px", "top": "0px"});
                $lis.attr("style", "");
                flag = true;
            }
        }
        console.log(nav_top);
    });
    $(".louti ul li").last().click(function () {
        $("body").animate({"scrollTop":0});
    });
//热门分会场鼠标经过效果
    $(".container .main1 .hot-topic a").mouseenter(function () {
        $(this).children("div").children("p").stop().animate({"height": "22px"});
    }).mouseleave(function () {
        $(this).children("div").children("p").stop().animate({"height": "0px"});

    })

})