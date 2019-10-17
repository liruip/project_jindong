$(function(){
    $(".quanxuan").change(function(){
        // console.log($(this).prop("checked"));
        $(".wuping, .quanxuan").prop("checked", $(this).prop("checked"));
    })
    $(".wuping").change(function(){
        console.log($(".wuping:checked").length);
        // console.log( $(".wuping").length);
        // $(".wuping").length) 所有复选框的个数
        if($(".wuping:checked").length ===  $(".wuping").length) {
          
            $(".quanxuan").prop("checked", true);
        }else {
            $(" .quanxuan").prop("checked", false);
        }
    });
    // 增减商品数量模块
    //增
    $(".decrement_right").click(function(){
        //得到当前兄弟文本的值 
        var n = $(this).siblings(".itxt").val();
        // console.log(n)
        n++;
        $(this).siblings(".itxt").val(n);
        //计算小计模块 加
        // var p = $(this).parent().parent().siblings().children().children("strong").html();
        var p = $(this).parents(".p-quantity").siblings().children().children("strong").html();
        // console.log(p);
        p = p.substr(1);
        // console.log(p);
        var price = (p * n).toFixed(2);
         $(this).parents(".p-quantity").siblings().children("strong").html("¥" + price);
        // console.log(m);
        $(this).parents().parents().siblings().siblings().siblings().parents().siblings().children(".wuping").prop("checked", true);
        Total();
    })
    //减
    $(".jian").click(function(){
        //得到当前兄弟文本的值 
        var n = $(this).siblings(".itxt").val();
        if(n == 1) {
            return false;
        }
        // console.log(n)
        n--;
        $(this).siblings(".itxt").val(n);
         //计算小计模块 减
         var p = $(this).parents(".p-quantity").siblings().children().children("strong").html();
         // console.log(p);
         p = p.substr(1);
         // console.log(p);
         var price = (p * n).toFixed(2);
         $(this).parents(".p-quantity").siblings().children("strong").html("¥" + price);
         $(this).parents().parents().siblings().siblings().siblings().parents().siblings().children(".wuping").prop("checked", true);
         // console.log(m);
         Total();
    });
    // 用户修改文本框的值 乘以 当前商品的单价
    $(".itxt").change(function(){
        var n = $(this).val();
        var p = $(this).parents(".p-quantity").siblings().children().children("strong").html();
        // console.log(p);
        p = p.substr(1);
        // console.log(p);
        var price = (p * n).toFixed(2);
        $(this).parents(".p-quantity").siblings().children("strong").html("¥" + price);
        // console.log(m);
          $(this).parents().parents().siblings().siblings().siblings().parents().siblings().children(".wuping").prop("checked", true);
        Total();
    });
    Total();
    function Total() {
        var count = 0;
        var money = 0;
        $('.itxt').each(function(i, ele){
            count+= parseInt($(ele).val());
        })
        $(".amount-sum em").text(count);
        // console.log(count);
       $('.p-sum strong').each(function(i, ele){
            money+= parseInt($(ele).text().substr(1));
       })
       $('.sumPrice em').text("¥" + money.toFixed(2));
    }
  
})

//获取后端数据
//获取后端数据
window.addEventListener("load",function(){
    $.ajax({
        "type": "post",
        "url": "shopping.php",
        "data": "",
        "async": true,
        "datatype": "json",
        // "beforeSend":function(){
        //     loadDiv.show();
        // },
        "success": showGoods,
        // "complete": function(){
        //     loadDiv.hide();
        // }
    })
    function showGoods(response){
        // let productObj = $(".countdown_img")[0];
        // let productJson = JSON.parse(response)[0];
        // $(productObj).find(".product_img img")[0].src = JSON.parse(response)[0].goodsImgSrc;
        let htmlStr = "";
        for(let i = 0 ; i < 1 ; i++){
            let productJson = JSON.parse(response)[i];
            console.log(productJson.image);
            htmlStr += `
                    <img src="${productJson.image}" alt="">
            `;
        }
        $(".p-goods_img")[0].innerHTML = htmlStr;
            $(".showBox").html(htmlStr);
    }
})

