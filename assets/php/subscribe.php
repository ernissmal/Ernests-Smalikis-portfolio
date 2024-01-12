<?php
// Establish a database connection (replace placeholders with your actual database credentials)
$servername = "your_database_host";
$username = "your_database_username";
$password = "your_database_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["first_name"];
    $email = $_POST["email"];
    
    // Perform database insertion (replace placeholders with your actual table and column names)
    $sql = "INSERT INTO subscribers (first_name, email) VALUES ('$first_name', '$email')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Subscription successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
