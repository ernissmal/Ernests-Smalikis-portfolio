<?php
// Establish a database connection (replace placeholders with your actual database credentials)
$host = 'localhost';
$username = 'user';
$password = ''; // No password for this user
$database = 'subscribers'; // Correct database name

try {
    $conn = new mysqli($host, $username, $password, $database);

    // Rest of your code for database operations

    // Process form data
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = htmlspecialchars($_POST["first_name"], ENT_QUOTES, 'UTF-8');
        $email = htmlspecialchars($_POST["email"], ENT_QUOTES, 'UTF-8');

        // Validate length
        if (strlen($first_name) > 255 || strlen($email) > 255) {
            echo "Input too long";
            exit; // Stop execution
        }

        $email = filter_var($email, FILTER_VALIDATE_EMAIL);

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
            // Perform secure database insertion
            $insert_sql = $conn->prepare("INSERT INTO `mailing list` (first_name, email) VALUES (?, ?)");
            $insert_sql->bind_param("ss", $first_name, $email);

            if ($insert_sql->execute() === TRUE) {
                echo "Subscription successful!";
            } else {
                echo "Error: " . $insert_sql->error;
            }
        }
    }

} catch (mysqli_sql_exception $e) {
    // Handle the exception (e.g., log the error)
    echo "Connection failed: " . $e->getMessage();
} catch (Exception $e) {
    // Handle other exceptions if needed
    echo "An unexpected error occurred: " . $e->getMessage();
} finally {
    // Close the database connection
    $conn->close();
}
?>
