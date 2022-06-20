<?php
require_once '../config/Database.php';
require_once '../controllers/User.php';

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$database = new Database();
$db = $database->connect();

$user = new User($db);

echo $user->get_all();
