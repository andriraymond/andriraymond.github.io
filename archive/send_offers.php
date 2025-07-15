<?php
// Include the PHPMailer library
require 'path/to/PHPMailer/PHPMailerAutoload.php';

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$message = $_POST['message'];

// Create a new PHPMailer instance
// $mail = new PHPMailer;

// Set up SMTP configuration
$mail->isSMTP();
$mail->Host = 'smtp.example.com'; // Replace with your SMTP server address
$mail->SMTPAuth = true;
$mail->Username = 'your_username'; // Replace with your SMTP username
$mail->Password = 'your_password'; // Replace with your SMTP password
$mail->Port = 587; // Replace with your SMTP port (if different)

// Set email content
$mail->setFrom($email, $name);
$mail->addAddress('andriraymondo@gmail.com'); // Replace with recipient email address
$mail->Subject = 'Subject';
$mail->Body = $message;

// Send the email
if (!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent.';
}
?>
