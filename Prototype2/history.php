<?php
//create the connection
$conn = mysqli_connect("localhost", "root", "", "isa");

//query
$sql = "SELECT * FROM weather";

//run the query
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html>

<head>
    <title>Weather Data</title>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 10px;
            text-align: left;
        }
    </style>

</head>

<body>
    <h1>Weather Data</h1>
    <table>
        <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Pressure</th>
            <th>Windspeed</th>
            <th>Datetime</th>
        </tr>
        <?php while ($row = mysqli_fetch_assoc($result)) { ?>
            <tr>
                <td><?php echo $row['city']; ?></td>
                <td><?php echo $row['temperature']; ?></td>
                <td><?php echo $row['humidity']; ?></td>
                <td><?php echo $row['pressure']; ?></td>
                <td><?php echo $row['wind_speed']; ?></td>
                <td><?php echo $row['date_time']; ?></td>
            </tr>
        <?php } ?>
    </table>

</body>

</html>

<style>
    table {
        font-family: Arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td,
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    th {
        background-color: #4CAF50;
        color: white;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }
</style>