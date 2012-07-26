<?php

// DATA

$file = "status.txt";

if (file_exists($file)) {
    $str = file_get_contents($file);
    $status = unserialize($str);
}
else {
    $status = array();
}

// SLIM

require 'lib/Slim/Slim.php';

$api = new Slim();
$api->contentType('application/json');

// STATUS

$api->get('/status/', function () {
    global $status;
    echo json_encode($status);
});

$api->post('/status/', function () {
    global $status, $file;

    $rawJSONString = file_get_contents('php://input');
    $item = json_decode($rawJSONString);

    array_push($status, $item);

    $file_handle = fopen($file, 'w');
    fwrite($file_handle, serialize($status));
    fclose($file_handle);

    echo json_encode($item);
});

$api->run();