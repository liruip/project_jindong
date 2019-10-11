//轮播图
window.addEventListener('load', function(){
    //获取元素
    var countdown_dt = document.querySelector(".countdown_dt");
    var countdown_dt_ul = document.querySelector(".countdown_dt_ul");
    var dt_arrow_l = document.querySelector(".dt_arrow_l");
    var dt_arrow_r = document.querySelector(".dt_arrow_r");
    var countdown_dt_ol = document.querySelector(".countdown_dt_ol");
    var countdown_width = countdown_dt.offsetWidth;
    //鼠标经过
    countdown_dt.addEventListener('mouseenter',function(){
        clearInterval(timer);
        timer = null;
    })
    //鼠标离开
    countdown_dt.addEventListener('mouseleave',function(){
        timer = setInterval(function() {
            dt_arrow_r.click();
        },2000)
    })
    //动态生成小圆圈，有几张图片，就生成几个小圆圈
    // this.console.log(countdown_dt_ul.children.length)
    for (var i = 0; i < countdown_dt_ul.children.length; i++) {
        //创建一个li
        var li = document.createElement("li");
        //记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i);
        //把li插入到ol里面
        countdown_dt_ol.appendChild(li);
        //绑定鼠标经过事件
        li.addEventListener('mouseenter', function(){
            for(var i = 0 ; i <  countdown_dt_ol.children.length; i++) {
                //清除所有li的current类名
                countdown_dt_ol.children[i].className = "";
            }
            //当前的li 设置current类名
            this.className = "current";
            //点击小圆圈，移动图片 移动的是ul
            //移动的距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            //当我们鼠标经过就拿到当前小li的索引号
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animation(countdown_dt,-index*countdown_width )
        })
    }
    //把ol下的第一个li设置类名为current
    countdown_dt_ol.children[0].className = 'current';
    //克隆第一张图片(li)放到ul 最后面
    var first = countdown_dt_ul.children[0].cloneNode(true);
    countdown_dt_ul.appendChild(first);
    //点击右侧按钮，图片滚动一张
    var num = 0;
    var circle = 0;
    var flag = true;
    dt_arrow_r.addEventListener('click', function(){
       if (flag) {
           flag = false;
            if( num == countdown_dt_ul.children.length-1) {
                countdown_dt_ul.style.left = 0;
                num = 0;
            }
            num++;
            animation(countdown_dt_ul,-num*countdown_width, function(){
                flag = true;
            });
            //点击右侧按钮，小圆圈跟随一起变化，可以再声明一个变量控制小圆圈的播放
            circle++;
            if (circle == countdown_dt_ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });
    //左侧按钮
    dt_arrow_l.addEventListener('click', function(){
       if(flag) {
            flag = false;
            if( num == 0) {
                num = countdown_dt_ul.children.length - 1;
                countdown_dt_ul.style.left = -num * countdown_width + 'px';
            }
            num--;
            animation(countdown_dt_ul,-num*countdown_width, function(){
                flag = true;
            })
            //点击右侧按钮，小圆圈跟随一起变化，可以再声明一个变量控制小圆圈的播放
            circle--;
            if (circle < 0) {
                circle = countdown_dt_ol.children.length - 1;
            }
            circleChange();
        }
    });
    function circleChange() {
         // 先清除其余小圆圈的circle类名
         for(var i = 0 ; i < countdown_dt_ol.children.length; i++) {
            countdown_dt_ol.children[i].className = '';
        }
        countdown_dt_ol.children[circle].className = 'current';
    }
    //自动播放
    var timer = setInterval(function() {
        dt_arrow_r.click();
    },2000)
})