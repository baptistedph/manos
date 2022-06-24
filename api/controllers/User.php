<?php

class User {

  private $conn;
  private $users_table = 'users';

  public function __construct($db) {
    $this->conn = $db;
  }

  public function get_all() {
    $query = "SELECT * FROM $this->users_table";

    $stmt = $this->conn->prepare($query);

    $stmt->execute();

    return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
  }

  public function get_single($user_id) {
    $query = "SELECT * FROM $this->users_table WHERE id = :user_id";

    $stmt = $this->conn->prepare($query);

    $stmt->execute([
      ':user_id' => $user_id
    ]);

    return json_encode($stmt->fetch(PDO::FETCH_ASSOC));
  }

  public function post() {
    $body = json_decode(file_get_contents('php://input'), true);
    $keys = array_keys($body);
    $values = array_values($body);

    foreach($keys as $key) {
        if(!in_array($key, ['first_name', 'last_name', 'company', 'email', 'password', 'profile_picture', 'bio', 'localisation', 'phone', 'street', 'post_code', 'city'])) {
            return json_encode([
                "success" => false,
                "error" => "Champ invalide"
            ]);
        }
    }

    $query = "INSERT INTO `users` (" . implode(',', $keys) . ") VALUES (";
    $query .= str_repeat('?,', count($values));
    $query = rtrim($query, ',') . ')';
    
    $stmt = $this->conn->prepare($query);
    $stmt->execute($values);
    
    return json_encode(["success" => true]);

  } 

  public function patch($user_id) {
    $body = json_decode(file_get_contents('php://input'), true);
    $keys = array_keys($body);
    $values = array_values($body);

    foreach($keys as $key) {
      if(!in_array($key, ['first_name', 'last_name', 'company', 'email', 'password', 'profile_picture', 'bio', 'localisation', 'phone', 'street', 'post_code', 'city'])) {
        return json_encode([
            "success" => false,
            "error" => "Champ invalide"
        ]);
      }
    }

    $query = "UPDATE `users` SET ";
    foreach($body as $key => $value) {
      $query .= "`" . $key . "` = ?,";
    }
    $query = rtrim($query, ',');
    $query .= "WHERE `id` = ?";
    
    $stmt = $this->conn->prepare($query);
    $stmt->execute([
      ...$values,
      $user_id
    ]);
    
    return json_encode([
      "success" => true,
      "message" => "Modifié avec succès"
    ]);		
  }

  public function delete($user_id) {
    $query = "DELETE FROM `users` WHERE `id` = :user_id";

    $stmt = $this->conn->prepare($query);
    $stmt->execute([
      ":user_id" => $user_id
    ]);

    return json_encode([
			"success" => true,
			"message" => "Supprimé avec succès"
		]);
  }

  public function filter_by_jobs($job) {
    $query = "SELECT * FROM `users` WHERE `jobs` = :job";

    $stmt = $this->conn->prepare($query);
    $stmt->execute([
      ":job" => $job
    ]);

    return json_encode(["success" => true]);
  }
}