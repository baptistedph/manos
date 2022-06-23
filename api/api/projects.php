<?php
require_once '../config/Database.php';
require_once '../controllers/Project.php';

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$database = new Database();
$db = $database->connect();

$project = new Project($db);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	if (isset($_GET['projectId'])) {
		$project_id = $_GET['projectId'];
		echo $project->get_single($project_id);
	} else if (isset($_GET['userId'])) {
		$user_id = $_GET['userId'];
		echo $project->get_all_from_user($user_id);
	}
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
  echo $project->post();
}

if($_SERVER['REQUEST_METHOD'] == 'PATCH') {
	$project_id = $_GET['projectId'];
  echo $project->patch($project_id);
}

if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
	$project_id = $_GET['projectId'];
  echo $project->delete($project_id);
}