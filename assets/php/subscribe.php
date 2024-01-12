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

    // Rest of your code for database operations

    // Process form data
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // ... (rest of the form processing code)

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
                // Log the SQL execution error and provide a generic error message to the user
                throw new Exception("Error executing SQL: " . $insert_sql->error);
            }
        }
    }

} catch (mysqli_sql_exception $e) {
    // Handle the database exception (e.g., log the error)
    echo "An unexpected database error occurred: " . $e->getMessage();
} catch (Exception $e) {
    // Handle other exceptions if needed
    echo "An unexpected error occurred: " . $e->getMessage();
} finally {
    // Close the database connection
    if ($conn) {
        $conn->close();
    }
}
?>
