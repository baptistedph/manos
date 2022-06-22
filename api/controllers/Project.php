<?php

class Project {

  private $conn;
  private $project_table = 'projects';

  public function __construct($db) {
    $this->conn = $db;
  }

  public function get_all_from_user($user_id) {
    $query = "SELECT * FROM $this->project_table WHERE `user_id` = :user_id";

    $stmt = $this->conn->prepare($query);

    $stmt->execute([
			':user_id' => $user_id
    ]);

    return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
  }

  public function get_single($project_id) {
    $query = "SELECT * FROM $this->project_table WHERE `id` = :project_id";

    $stmt = $this->conn->prepare($query);

    $stmt->execute([
      ':project_id' => $project_id
    ]);

    return json_encode($stmt->fetch(PDO::FETCH_ASSOC));
  }

  public function post() {
    $body = json_decode(file_get_contents('php://input'), true);
    $keys = array_keys($body);
    $values = array_values($body);

    foreach($keys as $key) {
			if(!in_array($key, ['title', 'description', 'user_id', 'budget', 'timespan'])) {
				return json_encode([
						"success" => false,
						"error" => "champ invalide"
				]);
			}
    }

    $query = "INSERT INTO `projects` (" . implode(',', $keys) . ") VALUES (";
    $query .= str_repeat('?,', count($values));
    $query = rtrim($query, ',') . ')';
    
    $stmt = $this->conn->prepare($query);
    $stmt->execute($values);
    
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

    $query = "UPDATE `projects` SET ";
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
	
}
