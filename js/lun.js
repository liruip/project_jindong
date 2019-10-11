
 var focus = document.querySelector(".focus");
 var arrow_l = document.querySelector(".arrow-l");
 var arrow_r = document.querySelector(".arrow-r");
 
function lunbotu(focus, arrow_l, arrow_r){
    window.addEventListener('load', function(){
        //获取元素
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

    })
    
}