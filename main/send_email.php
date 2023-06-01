<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $company = $_POST["company"];
  $message = $_POST["message"];

  $to = "andriraymond98.com"; //  Alamat email
  $subject = "Email dari Portofolio";
  $body = "Nama: $name\nEmail: $email\nPesan: $message";

   // Set the headers
   $headers = "From: $email\r\n";
   $headers .= "Reply-To: $email\r\n";

  // Kirim email menggunakan fungsi mail()
  if (mail($to, $subject, $body, $headers)) {
    echo "Email telah berhasil dikirim.";
  } else {
    echo "Maaf, terjadi kesalahan saat mengirim email.";
  }
}
?>