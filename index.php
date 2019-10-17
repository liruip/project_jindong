<?php
    header("Content-type:text/html;charset=utf-8");

    class productinfo{
        public $goodsId;
        public $goodsName;
        public $goodsType;
        public $goodsPrice;
        public $goodsCount;
        public $goodsDesc;
    }

    //1.接受前端数据
    //2.连接数据库
    $conn = mysql_connect("localhost","root","root");
    //3.修改编码格式
    mysql_query("set names 'utf8'",$conn);
    //4.选择数据库
    mysql_select_db("project_jindong",$conn);
    //5.执行语句
    $sqlstr = "select *from information";
    $result = mysql_query($sqlstr,$conn);
    $resultRows = mysql_num_rows($result);//获得结果的行数
    // echo $resultRows;
    if($resultRows){
        while($row = mysql_fetch_array($result)){
            $productinfo = new productinfo();
            $productinfo->goodsId = $row["goodsId"];
            $productinfo->goodsName = $row["goodsName"];
            $productinfo->goodsType = $row["goodsType"];
            $productinfo->goodsPrice = $row["goodsPrice"];
            $productinfo->goodsCount = $row["goodsCount"];
            $productinfo->goodsDesc = $row["goodsDesc"];
            $data[] = $productinfo;
        }
        $json = json_encode($data,JSON_UNESCAPED_UNICODE);
        echo $json;
    }else{
        echo "-1";
    }
    // $rows = mysql_num_rows($result);
    // if($rows>0){
    //     mysql_close($conn);
    //     echo "1";
    // }else{
    //     echo "0";
    // }
    
?>
