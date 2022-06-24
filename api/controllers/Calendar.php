<?php

class Calendar {
    private $conn;
    private $calendar_dates_table = 'calendar_dates';
  
    public function __construct($db) {
      $this->conn = $db;
    }
    
     public function post($user_id, $start_date, $end_date){
        $query = "INSERT INTO $this->users_table (start_date, end_date) VALUES ($start_date, $end_date) WHERE id = :user_id";

        $stmt = $this->conn->prepare($query);
    
        $stmt->execute();
    
        return json_encode(["success" => true]);
    }

    public function get_all_from_user($user_id) {
        $query = "SELECT * FROM $this->calendar_dates_table WHERE id = :user_id";

        $stmt = $this->conn->prepare($query);
    
        $stmt->execute();
    
        return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }
}