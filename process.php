<?php

$data = file_get_contents("http://api.icndb.com/jokes/random");
$row = json_decode($data, true);

echo $row['value']['joke'];

?>
