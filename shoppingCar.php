<?php
    header("Content-type:text/html;charset=utf-8");
    // $str = "[";
    // $str = $str.'{"id":"001","name":"海底捞火锅店","price":20,"num":3,"money":60},';
    // $str = $str.'{"id":"002","name":"竹园村火锅店","price":10,"num":3,"money":30},';
    // $str = $str.'{"id":"003","name":"小郡肝火锅店","price":10,"num":3,"money":30}';
    // $str = $str.']';
    // echo $str;



        class Foods{
            public $id;
            public $name;
            public $price;
            public $num;
            public $money;
        }
        $conn = mysql_connect("localhost","root","root");
        mysql_query("set names 'utf8'",$conn);
        mysql_select_db("mydbh5",$conn);
        $sqlstr = "select * from foods";
        $result = mysql_query($sqlstr,$conn);
        if($result){
            while($row = mysql_fetch_array($result)){
                $foods = new Foods();
                $foods->id = $row["id"];
                $foods->name = $row["name"];
                $foods->price = $row["price"];
                $foods->num = $row["num"];
                $foods->money = $row["money"];
                $data[] = $foods;
            }
            $json = json_encode($data,JSON_UNESCAPED_UNICODE);
            echo $json;
        }else{
            echo "查询失败";
        }
        
?>