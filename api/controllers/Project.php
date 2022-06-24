<?php

class Project {

  private $conn;
  private $project_table = 'projects';

  public function __construct($db) {
    $this->conn = $db;
  }

  public function get_all_from_user($user_id) {
    // $query = "SELECT * FROM $this->project_table WHERE `user_id` = :user_id";
    $fields = "projects.id as project_id, title, description, budget, projects.user_id, timespan, project_pictures.id as project_pictures_id, name, project_pictures.uuid as uuid";
    $query = "SELECT $fields FROM `projects` INNER JOIN `project_pictures` ON projects.uuid = project_pictures.uuid AND projects.user_id = :userId";

    $stmt = $this->conn->prepare($query);

    $stmt->execute([
			':userId' => $user_id
    ]);

    return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
  }

  public function get_single($project_id) {

    // $query = "SELECT * FROM $this->project_table WHERE `id` = :project_id";
    $fields = "projects.id as project_id, title, description, budget, projects.user_id, timespan, project_pictures.id as project_pictures_id, name, project_pictures.uuid as uuid";
    $query = "SELECT $fields FROM `projects` INNER JOIN `project_pictures` ON projects.uuid = project_pictures.uuid AND projects.id = :project_id";

    $stmt = $this->conn->prepare($query);

    $stmt->execute([
      ':project_id' => $project_id
    ]);

    return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
  }

  public function post($uuid) {
    // $body = json_decode(file_get_contents('php://input'), true);
    $body = $_POST;
    $keys = array_keys($body);
    $values = array_values($body);

    foreach($keys as $key) {
			if(!in_array($key, ['title', 'description', 'user_id', 'budget', 'timespan', 'uuid'])) {
				return json_encode([
						"success" => false,
						"error" => "champ invalide"
				]);
			}
    }

    $query = "INSERT INTO $this->project_table (" . implode(',', $keys) . ",`uuid`) VALUES (";
    $query .= str_repeat('?,', count($values));
    $query .= '?)';
    
    $stmt = $this->conn->prepare($query);
    $stmt->execute([
      ...$values,
      $uuid
    ]);
    
    return json_encode(["success" => true]);

  }

	
  public function patch($project_id) {
		$body = json_decode(file_get_contents('php://input'), true);
    $keys = array_keys($body);
    $values = array_values($body);

		foreach($keys as $key) {
			if(!in_array($key, ['title', 'description', 'budget', 'timespan'])) {
				return json_encode([
						"success" => false,
						"error" => "champ invalide"
				]);
			}
    }

    $query = "UPDATE $this->project_table SET ";
		foreach($body as $key => $value) {
			$query .= "`" . $key . "` = ?,";
		}
		$query = rtrim($query, ',');
		$query .= "WHERE `id` = ?";
    
    $stmt = $this->conn->prepare($query);
    $stmt->execute([
			...$values,
			$project_id
		]);
    
    return json_encode([
			"success" => true,
			"message" => "Modifié avec succé"
		]);		
  }

  public function delete($project_id) {
    $query = "DELETE FROM $this->project_table WHERE `id` = :project_id";

    $stmt = $this->conn->prepare($query);
    $stmt->execute([
      ":project_id" => $project_id
    ]);

    return json_encode([
			"success" => true,
			"message" => "suprimé avec succé"
		]);	

  }
	
}