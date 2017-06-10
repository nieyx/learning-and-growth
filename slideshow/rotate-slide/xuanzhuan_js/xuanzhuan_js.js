window.onload = function () {
    var arrow = document.getElementById("arrow");
    var wrap = document.getElementById("wrap");
    var lis = wrap.children[0].children[0].children;
    var json = [
        {//1
            width: 400,
            top: 0,
            left: 100,
            opacity: 40,
            z: 2
        },
        {//2
            width: 600,
            top: 100,
            left: 0,
            opacity: 80,
            z: 3
        },
        {//3
            width: 800,
            top: 50,
            left: 200,
            opacity: 100,
            z: 4
        },
        {//4
            width: 600,
            top: 100,
            left: 600,
            opacity: 80,
            z: 3
        },
        {//5
            width: 400,
            top: 0,
            left: 700,
            opacity: 40,
            z: 2
        }
    ];
    move();
    var flag = true;
    var as = arrow.children;
    for(var k in as){
        as[k].onclick = function () {
            if(this.className =="prev"){
                //move(true);

                if(flag == true){
                    move(true);
                    flag = false;
                }
            }
            else {
                //move(false);

                if(flag ==true){
                    move(false);
                    flag = false;
                }
            }
        }
    }
//将遍历赋值的封装成唯一个函数
    function move(x) {
        if(x!=undefined){
            if (x){
                json.unshift(json.pop());
            }
            else {
                json.push(json.shift());
            }
        }
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], {
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: json[i].opacity,
                zIndex: json[i].z
            }, function () {
                flag = true;
            })
        }
    }

////遍历lis，将json值赋给lis
//    for(var i=0;i<lis.length;i++){
//        animate(lis[i],{
//            width:json[i].width,
//            height:json[i].height,
//            top:json[i].top,
//            left:json[i].left,
//            opacity:json[i].opacity,
//            zIndex:json[i].z
//        })
//    }
    wrap.onmouseover = function () {
        animate(arrow,{"opacity":100});
    }
    wrap.onmouseout = function () {
        animate(arrow,{"opacity":0});
    }
}