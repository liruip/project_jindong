<?php
     header("Content-type:text/html;charset=utf-8");
    //获取数据
    $usertext = $_GET['username'];
    // $userpass = $_GET['userpass'];
    //链接数据库
    $mysjk = mysql_connect("localhost", "root", "root");
    
    if (!$mysjk) {
        echo "数据库出错";
    }else {
        mysql_select_db("myshuju", $mysjk);
        $chaxun = "select * from vip where username='$usertext'";
        $panduan = mysql_query($chaxun, $mysjk);
        $rows = mysql_num_rows($panduan);
        if($rows > 0) {
            mysql_close($mysjk);
            echo "1";//用户名已被注册
            
        }else {
            // $charsj = "insert into vip (username, userpass) values ('$usertext','$userpass')";
            // $chax = mysql_query($charsj,$mysjk);
            // //关闭数据库
            // mysql_close($mysjk);
            //  if($chax!=1){
            //     echo "注册失败，请重新注册";
            // }else{
            //     echo "恭喜您，注册成功！";
            // }
            echo "0";
        }
    }

?>