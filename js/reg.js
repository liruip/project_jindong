//表单验证
window.onload = function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; //手机号正则表达式
    var regqq = /^[1-9]\d{4,}$/; //QQ号正则表达式
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/; //昵称正则表达式
    var regdx = /^\d{6}$/; //短信验证正则表达式
    var regdl = /^[a-zA-Z0-9_-]{6,16}$/; //密码正则表达式
    var tel = document.querySelector("#iph");
    var qq = document.querySelector("#qq");
    var nc = document.querySelector("#nc");
    var dx = document.querySelector("#dx");
    var dl = document.querySelector("#dl");
    var cf = document.querySelector("#cf");
    regexp(tel, regtel) //手机号
    regexp(qq, regqq) //QQ
    regexp(nc, regnc) //昵称
    regexp(dx, regdx) //短信验证
    regexp(dl, regdl) //登录密码
   function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                // console.log("正确")
                this.nextElementSibling.className = "success";
                this.nextElementSibling.innerHTML = '<i class="success_ico"></i>输入正确';
            }else {
                this.nextElementSibling.className = "error";
                this.nextElementSibling.innerHTML = '<i class="error_ico"></i>格式不正确，请重新输入';
            }
        }
   };
   cf.onblur = function() {
       if(this.value == dl.value) {
        this.nextElementSibling.className = "success";
        this.nextElementSibling.innerHTML = '<i class="success_ico"></i>输入正确';
       }else {
        this.nextElementSibling.className = "error";
        this.nextElementSibling.innerHTML = '<i class="error_ico"></i>密码不一致';
       }
   }
}











    
    