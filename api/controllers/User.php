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

}