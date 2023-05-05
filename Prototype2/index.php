<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    //create the connection
    $conn = mysqli_connect("localhost","root","","isa");
    //fetch from api
    $json_data = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=Slough&appid=79b2dd6a4e862ef385bc174734356894&units=metric");
    //convert into json format
    $data = json_decode($json_data,true);
    //access the data 
    $city = $data['name'];
    $temp = $data['main']['temp'];
    $humidity = $data['main']['humidity'];
    $wind_speed =$data['wind']['speed'];
    $pressure = $data['main']['pressure'];
    $timestamp = $data['dt'];
    $icon=$data['weather'][0]['icon'];
    $condition=$data['weather'][0]['description'];
    $date = gmdate("Y-m-d\TH:i:s\Z", $timestamp);
    //query 
    $sql = "INSERT INTO weather(city,temperature,humidity,pressure,wind_speed,date_time) VALUES('$city','$temp','$humidity','$pressure','$wind_speed','$date')";
    //run the query
    mysqli_query($conn,$sql);
    ?>

</body>
</html>