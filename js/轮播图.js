window.addEventListener("load",function(){
    //1.获取元素
    var arrow_l = document.querySelector(".arrow-1");
    var arrow_r = document.querySelector(".arrow-r");
    var foucs = document.querySelector(".focus");
    var foucswidth = foucs.offsetWidth;
    //2.鼠标经过foucs，就显示隐藏的左右按钮
    foucs.addEventListener("mouseenter",function(){
        arrow_l.style.display="block";
        arrow_r.style.display="block";
        clearInterval(timer);
        timer=null;
    })
    //鼠标离开foucs，就隐藏的左右按钮
    foucs.addEventListener("mouseleave",function(){
        arrow_l.style.display="none";
        arrow_r.style.display="none";
        timer = setInterval(function(){
            arrow_r.click();
        },2000)
    })
    //3.动态生成小圆圈，有几个图片就显示几个小圆圈
    var ul = foucs.querySelector("ul");
    var ol = foucs.querySelector(".circle");
    for (var i = 0; i < ul.children.length; i++) {
        //小圆圈的排他思想 直接在生成小圆圈的同时绑定点击事件
        //创建一个li 
        var li = document.createElement("li");
        li.setAttribute("index",i);
        //把小li插入到ol后面
        ol.appendChild(li);
        //记录当前小圆圈的索引号
        li.addEventListener("click", function(){
            for (var i= 0; i < ol.children.length; i++) {
                //清除所有小li
                ol.children[i].className="";
            }
            //获取当前小圆圈的索引号
            var index = this.getAttribute("index");
            num = index;
            sirc = index;
            //留下自己 当前的小li类名设置成current
            this.className="current";
            //5.点击小圆圈，移动图片,移动的是ul
            console.log(foucswidth)
            animate(ul, -index * foucswidth)
        })
    }
    //把ol下的第一个小li设置类名为 current
    //设置第一个小li为默认选中状态
    ol.children[0].className="current"
    //克隆第一张图片(li),放到ul的后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //点击右侧按钮
    var num = 0;
    var sirc = 0;
    //节流阀
    var flag = true;
    arrow_r.addEventListener("click",function(){
        if (flag) {
            flag = false;//关闭节流阀
             //如果走到最后复制的一张，此时 我们的ul 要快速的复原left改为0；
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            
            animate(ul, -num * foucswidth, function(){
                flag = true;//打开节流阀
            })
            sirc++;
            if (sirc == 4) {
                sirc = 0;
                }
                //函数调用
                circleChange();
        }
    })

    //点击左侧按钮
    arrow_l.addEventListener("click",function(){
            if (flag) {
                flag = false;//关闭节流阀
                //如果走到最后复制的一张，此时 我们的ul 要快速的复原left改为0；
                if (num == 0) {
                    num = ul.children.length - 1;
                    ul.style.left = -num * foucswidth + "px";
            
            }
            num--;
            
            animate(ul, -num * foucswidth, function(){
                flag = true;//打开节流阀
            })
            sirc--;
            if (sirc < 0) {
                sirc = ol.children.length - 1;
                }
                //函数调用
                circleChange(); 
            }
        })

        function circleChange(){
            for (var i = 0; i < ol.children.length; i++){
                ol.children[i].className = "";
            }
            ol.children[sirc].className = "current";
        }
        //自动播放
        var timer = setInterval(function(){
            //手动调用右击点击事件
            arrow_r.click();
        },2000)
})