<?php
// Include the library of PHP Mailer
require 'path/to/PHPMailer/PHPMailerAutoload.php';

// Ambil nilai dari form
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$company = $_POST["company"];
$message = $_POST["message"];


// CREATE USER A NEW PHPMailer instance
$mail = new PHPMailer;

// Masukkan alamat email pribadi Anda di bawah ini
// $tujuan_email = 'andriraymond98@gmail.com';

// Judul email
$judul_email = 'Email dari Portofolio';

// Isi email
$isi_email = "Nama: $nama\n";
$isi_email .= "Email: $email\n";
$isi_email .= "Pesan: $pesan\n";

// Kirim email
$hasil = mail($tujuan_email, $judul_email, $isi_email);

// Cek jika email berhasil dikirim atau tidak
// if ($hasil) {
//     echo 'Email berhasil dikirim.';
// } else {
//     echo 'Email gagal dikirim.';
// }

// Set up SMTP cofiguration
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com'; // SMTP Server Address
?>