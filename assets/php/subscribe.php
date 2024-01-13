<?php
try {
    // Establish a database connection (replace placeholders with your actual database credentials)
    $host = 'localhost';
    $username = 'user';
    $password = ''; // No password for this user
    $database = 'subscribers'; // Correct database name

    $conn = new mysqli($host, $username, $password, $database);

    if ($conn->connect_error) {
        // Log the connection error and provide a generic error message to the user
        throw new Exception("Database connection failed: " . $conn->connect_error);
    }

    // Process form data
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve and sanitize form data
        $first_name = isset($_POST["first_name"]) ? htmlspecialchars(trim($_POST["first_name"]), ENT_QUOTES, 'UTF-8') : '';
        $email = isset($_POST["email"]) ? filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) : '';

// Validate email format
if ($email === false) {
    echo "Invalid email format";
    exit; // Stop execution
}

// Check if the email already exists
$check_sql = $conn->prepare("SELECT * FROM `mailing list` WHERE email = ?");
$check_sql->bind_param("s", $email);
$check_sql->execute();
$result = $check_sql->get_result();

if ($result->num_rows > 0) {
    echo "Email already subscribed!";
} else {
    // Check if first_name is not empty before insertion
    if (empty($first_name)) {
        echo "First name cannot be empty";
        exit; // Stop execution
    }

    // Determine if the marketing checkbox is checked
    $marketing = isset($_POST["marketing"]) ? 1 : 0; // Represent boolean as 1 or 0

    // Perform secure database insertion
    $insert_sql = $conn->prepare("INSERT INTO `mailing list` (first_name, email, marketing) VALUES (?, ?, ?)");
    $insert_sql->bind_param("ssi", $first_name, $email, $marketing);

    if ($insert_sql->execute() === TRUE) {
        echo "Subscription successful!";
    } else {
        // Log the SQL execution error and provide a generic error message to the user
        throw new Exception("Error executing SQL: " . $insert_sql->error);
    }
}
    }

} catch (mysqli_sql_exception $e) {
    // Handle the database exception (e.g., log the error)
    echo '<script>alert("An unexpected database error occurred: ' . $e->getMessage() . '");</script>';
} catch (Exception $e) {
    // Handle other exceptions if needed
    echo '<script>alert("An unexpected error occurred: ' . $e->getMessage() . '");</script>';
} finally {
    // Close the database connection
    if ($conn) {
        $conn->close();
    }
}
?>