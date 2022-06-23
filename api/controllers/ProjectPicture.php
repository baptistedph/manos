<?php

class ProjectPicture {

  private $conn;
  private $project_picture_table = 'project_pictures';

  public function __construct($db) {
    $this->conn = $db;
  }

  public function post($uuid) {
		// path to storage directory
		$target_dir = __DIR__ . "/../uploads/";
		$full_name = $_FILES["projectPictures"]["name"];
		require __DIR__ . "/../src/uuid.php";
		$file_name = guidv4($full_name);
		$target_file = $target_dir . basename($full_name);
		// get extension in lower
		$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		$full_name = $file_name . "." . $imageFileType;
		
		// if it's not a picture
		$check = getimagesize($_FILES["projectPictures"]["tmp_name"]);
		if($check !== false) {
			$uploadOk = 1;
		} else {
			return json_encode([
				"success" => false,
				"message" => "ce n'est pas une image"
			]);	
		}

		// if picture is too big
		if ($_FILES["projectPictures"]["size"] > 500000) {
			return json_encode([
				"success" => false,
				"message" => "Image trop volumineuse"
			]);	
		}

		// if picture as the good extension
		if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
			return json_encode([
				"success" => false,
				"message" => "seulement jpg, png, jpeg et gif"
			]);	
		}

		// if everything is good
		if (move_uploaded_file($_FILES["projectPictures"]["tmp_name"], $target_file)) {
			$query = "INSERT INTO $this->project_table (`name`, `uuid`) VALUES (:name, :uuid)";
			$stmt = $this->conn->prepare($query);

			$stmt->execute([
				":name" => $full_name,
				":uuid" => $uuid
			]);
		} else {
			return json_encode([
				"success" => false,
				"message" => "something went wrong"
			]);	
		}
	}	
}
