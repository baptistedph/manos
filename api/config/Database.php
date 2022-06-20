<?php
class Database {

  private $host = '159.223.164.94';
  private $dbname = 'manos';
  private $username = 'manos';
  private $password = 'manos1234';
  private $port = '3306';
  private $conn;

  public function connect() {
    $this->conn = null;
    
    try {
      $this->conn = new PDO("mysql:host=$this->host;dbname=$this->dbname;port=$this->port", $this->username, $this->password);
      $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    } catch (PDOException $e) {
      echo "Connection Error: $e";
    }

    return $this->conn;
  }
}