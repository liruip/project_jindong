<?php
     header("Content-type:text/html;charset=utf-8");
    //1、接收前端的数据

    $username = $_POST['username'];
    $userpass = $_POST['userpass'];

    // //2、处理
    // //1)、链接数据库(搭桥)
    // $conn = mysql_connect("localhost","root","root");

    // if(!$conn){
    //     echo("数据库出错".mysql_error());
    // }else{
    //     //2)、选择库（选择目的地）
    //     mysql_select_db("myshuju",$conn);

    //     //3)、执行SQL语句（数据传输）
    //     //3.1)
    //     $sqlstr="select * from vip where username='$username' and userpass='$userpass' ";//查询该用户名在数据库中有没有。 
    //     $result = mysql_query($sqlstr,$conn);
    //     $rows = mysql_num_rows($result);//获得结果的行数
    //     if($rows>0){
    //         //4)、关闭数据库
    //         mysql_close($conn);
    //         // echo $rows;
    //         echo "1";//登录成功
    //     }else{
    //         echo "0";//登录失败
    //     }
    // }



    class vipInfo{
        public $username;
        public $userpass;
        public $age;
    }
    $conn = mysql_connect("localhost","root","root");
    mysql_query("set names 'utf8'",$conn);
    mysql_select_db("myshuju",$conn);
    $sqlstr = "select * from vip where username='$username' and userpass='$userpass' ";
    $result = mysql_query($sqlstr,$conn);
    if($result){
        while($row = mysql_fetch_array($result)){
            $vipInfo = new vipInfo();
            $vipInfo->username = $row["username"];
            $vipInfo->userpass = $row["userpass"];
            $vipInfo->age = $row["age"];
            $data[] = $vipInfo;
        }
        $json = json_encode($data,JSON_UNESCAPED_UNICODE);
        echo $json;
    }else{
        echo "-1";
    }
?>