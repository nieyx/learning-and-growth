var box = document.getElementById("box");
var slider_block = box.children[0].children[0];
var imgs = slider_block.children;
var slider_square = box.children[1];
var slider_square_next = box.children[1].children[1];
//首先要根据imgs的数量自动生成span
for (var i=0;i<imgs.length;i++){
    var span = document.createElement("span");
    span.className = "slider-square-con";
    span.innerHTML = i+1;
    slider_square.insertBefore(span,slider_square_next);
}
//让第一个span有current的属性
slider_square.children[1].className = "slider-square-con current";

//让第一张图片在中间，其他的图片都到右侧位置
var sliderWidth = box.offsetWidth;
for(var i=1;i<imgs.length;i++){
    imgs[i].style.left = sliderWidth+"px";
}

//点击span时的相应动作
var spans = slider_square.children;
var iNow = 0;
for (var k in spans){
    spans[k].onclick = function () {
        if (this.className =="slider-square-pre"){
            //alert("r");
            animate(imgs[iNow],{left:sliderWidth});
            --iNow<0?iNow=imgs.length-1:iNow;
            imgs[iNow].style.left = -sliderWidth +"px";
            animate(imgs[iNow],{left:0});
            square();
        }else if (this.className =="slider-square-next"){
            //alert("l");
            //animate(imgs[iNow],{left:-sliderWidth});
            //++iNow>imgs.length-1?iNow=0:iNow;
            //imgs[iNow].style.left = sliderWidth +"px";
            //animate(imgs[iNow],{left:0});
            autoplay();
            square();
        }
        else {
            //alert("other");
            var that = this.innerHTML-1;
             if (that >iNow){
                animate(imgs[iNow],{left:-sliderWidth});
                imgs[that].style.left = sliderWidth+"px";
            }
            else if (that<iNow){
                 animate(imgs[iNow],{left:sliderWidth});
                 imgs[that].style.left = -sliderWidth+"px";
             }
            iNow = that;
            animate(imgs[that],{left:0});
            square();
        }
    }
}
//用来控制下面span的样式
function square(){
    for(var i=1;i<spans.length-1;i++){
        spans[i].className = "slider-square-con";
    }
    spans[iNow+1].className = "slider-square-con current";
}

var timer = null;
timer = setInterval(autoplay,2000)
function autoplay(){
    animate(imgs[iNow],{left:-sliderWidth});
    ++iNow>imgs.length-1?iNow=0:iNow;
    imgs[iNow].style.left = sliderWidth +"px";
    animate(imgs[iNow],{left:0});
    square();
}

//鼠标悬浮上去，定时器停止
box.onmouseover = function() {
    clearInterval(timer);
}
box.onmouseout = function() {
    timer = setInterval(autoplay,2000);
}


