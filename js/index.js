//轮播图
window.addEventListener('load', function(){
    //获取元素
    var focus = document.querySelector(".focus");
    var arrow_l = document.querySelector(".arrow-l");
    var arrow_r = document.querySelector(".arrow-r");
    var focuswidth = focus.offsetWidth;
    //鼠标经过
    focus.addEventListener('mouseenter',function(){
        clearInterval(timer);
        timer = null;
    })
    //鼠标离开
    focus.addEventListener('mouseleave',function(){
        timer = setInterval(function() {
            arrow_r.click();
        },2000)
    })
    //动态生成小圆圈，有几张图片，就生成几个小圆圈
    var ul = focus.querySelector("ul");
    var ol = focus.querySelector(".circle");
    // this.console.log(ul.children.length)
    for (var i = 0; i < ul.children.length; i++) {
        //创建一个li
        var li = document.createElement("li");
        //记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i);
        //把li插入到ol里面
        ol.appendChild(li);
        //绑定鼠标经过事件
        li.addEventListener('mouseenter', function(){
            for(var i = 0 ; i < ol.children.length; i++) {
                //清除所有li的current类名
                ol.children[i].className = "";
            }
            //当前的li 设置current类名
            this.className = "current";
            //点击小圆圈，移动图片 移动的是ul
            //移动的距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            //当我们鼠标经过就拿到当前小li的索引号
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            console.log(focuswidth);
            console.log(index);
            animation(ul,-index*focuswidth)
        })
    }
    //把ol下的第一个li设置类名为current
    ol.children[0].className = 'current';
    //克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //点击右侧按钮，图片滚动一张
    var num = 0;
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function(){
       if (flag) {
           flag = false;
            if( num == ul.children.length-1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animation(ul,-num*focuswidth, function(){
                flag = true;
            });
            //点击右侧按钮，小圆圈跟随一起变化，可以再声明一个变量控制小圆圈的播放
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });
    //左侧按钮
    arrow_l.addEventListener('click', function(){
       if(flag) {
            flag = false;
            if( num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focuswidth + 'px';
            }
            num--;
            animation(ul,-num*focuswidth, function(){
                flag = true;
            })
            //点击右侧按钮，小圆圈跟随一起变化，可以再声明一个变量控制小圆圈的播放
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    });
    function circleChange() {
         // 先清除其余小圆圈的circle类名
         for(var i = 0 ; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    //自动播放
    var timer = setInterval(function() {
        arrow_r.click();
    },2000)




    //顶部和右侧电梯导航栏
    var dingbu = document.querySelector(".dingbu");
    var fiexdtool_right = document.querySelector(".fiexdtool_right");
    var floot = document.querySelector(".floot");
    var heaer_max = document.querySelector(".heaer_max");
    var floot_top = floot.offsetTop;
    console.log(floot_top)

    document.addEventListener('scroll', function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset >= floot_top) {
            fiexdtool_right.style.position = "fixed";
            fiexdtool_right.style.top = '100px';
            dingbu.style.display = 'block';
            heaer_max.style.display = 'block';
            
        }else {
            fiexdtool_right.style.position = "absolute";
            fiexdtool_right.style.top = floot_top + 'px';
            dingbu.style.display = 'none';
            heaer_max.style.display = 'none';
        }

    })
    dingbu.addEventListener('click', function(){
        animationss(window, 0)
    })


    function animationss(obj, target, callback) {
    clearInterval(obj.time);
    obj.time = setInterval(function(){
        //每次移动的距离
        var step = (target -window.pageXOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageXOffset == target){
            clearInterval(obj.time)
            if (callback) {
                callback();
            }
        }
        obj.style.left = window.pageXOffset + step + "px";
        window.scroll(0, window.pageXOffset + step)
    },15)
    }



    //倒计时
    var hour = document.querySelector(".hour")
    var minute = document.querySelector(".minute")
    var second = document.querySelector(".second")
    var inputTime = +new Date('2019-12-1 18:00:00');
    setInterval (countDown, 1000);
    function countDown() {
        var nowTime = +new Date();
        var times = (inputTime - nowTime) / 1000;
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h;
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m;
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
    }
})

//倒计时轮播图
window.addEventListener('load', function(){
    //获取元素
    var countdown_iphone = document.querySelector(".countdown_iphone");
    var countdown_ul = document.querySelector(".countdown_ul");
    var countdown_width = countdown_iphone.offsetWidth;
    var arrow_ls = document.querySelector(".dianji_l");
    var arrow_rs = document.querySelector(".dianji");
    var first = countdown_ul.children[0].cloneNode(true);
    countdown_ul.appendChild(first);
    var num = 0;
    var flag = true;
   //右侧按钮
    arrow_rs.addEventListener('click', function(){
        if (flag) {
            flag = false;
            if (num == countdown_ul.children.length-1){
                countdown_ul.style.left = 0;
                num = 0;
            }
        }
        num++;
        animation(countdown_ul, -num*countdown_width);
        flag = true;
    });
    arrow_ls.addEventListener('click', function(){
        if (num == 0){
            num = countdown_ul.children.length - 1;
            countdown_ul.style.left = -num * countdown_width + 'px';
            
        }
        num--;
        animation(countdown_ul, -num*countdown_width)
    });

})

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
window.addEventListener('load', function(){
    var denglv = document.querySelector(".denglv");
    var touxiang_guang = document.querySelector(".touxiang_guang");
    var Successful = document.querySelector(".Successful");
    var touxiang_denglv_zhuce = document.querySelector(".touxiang_denglv_zhuce");
    let vipInfo = JSON.parse(getCookie("vipInfo"));
    // this.console.log(vipInfo)
    if(vipInfo) {
        denglv.innerHTML= (JSON.parse(vipInfo)[0].username);
        Successful.innerHTML= (JSON.parse(vipInfo)[0].username);
        touxiang_guang.innerHTML="hi~" + (JSON.parse(vipInfo)[0].username);
        touxiang_denglv_zhuce.innerHTML= ` <a href="" class="touxiang_denglv_zhuce">退出</a>`;
       
       

        
    }
    touxiang_denglv_zhuce.addEventListener("click", function(){
        removeCookie("vipInfo");

    })
})

