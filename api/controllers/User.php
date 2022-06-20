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
  
}