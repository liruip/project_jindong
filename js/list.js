window.addEventListener("load", function(){
     //倒计时
     var hour = document.querySelector(".hour")
     var minute = document.querySelector(".minutes")
     var second = document.querySelector(".seconds")
     var inputTime = +new Date('2019-12-1 18:00:00');
     setInterval (countDown, 1000);
     function countDown() {
         var nowTime = +new Date();
         var times = (inputTime - nowTime) / 1000;
         var h = parseInt(times / 60 / 60 % 24);
         h = h < 10 ? '0' + h : h;
         hour.innerHTML = h + "&nbsp;:";
         var m = parseInt(times / 60 % 60);
         m = m < 10 ? '0' + m : m;
         minute.innerHTML = m + "&nbsp;:";
         var s = parseInt(times % 60);
         s = s < 10 ? '0' + s : s;
         second.innerHTML = s;
     }
    
    
 })

window.addEventListener("load", function(){
    var sk_dow = document.querySelector(".sk_dow")
    var sk_dow_top = sk_dow.offsetTop;
    console.log(sk_dow_top)
    document.addEventListener('scroll', function(){
        console.log(window.pageYOffset);
        
        if(window.pageYOffset > sk_dow_top) {
            sk_dow.style.position = "fixed"
            sk_dow.style.top = "0";
        }else {
            sk_dow.style.position = "relative";
        }
    })
     
    
})
 