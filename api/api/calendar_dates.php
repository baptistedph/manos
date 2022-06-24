<?php
require_once '../config/Database.php';
require_once '../controllers/User.php';
require_Once '../controller/Calendar.php';

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$database = new Database();
$db = $database->connect();

$calendar_dates = new Calendar($db);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    echo $calendar_dates->post($user_id, $start_date, $end_date);
  }

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    echo $calendar_dates->get_all_from_user($user_id);
  }