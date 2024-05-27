<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";  
$password = "";      
$dbname = "markea_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Error de conexión a la base de datos']));
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $conn->real_escape_string($_POST['nombre']);
    $apellido = $conn->real_escape_string($_POST['apellido']);
    $correo_electronico = $conn->real_escape_string($_POST['correo_electronico']);
    $mensaje = $conn->real_escape_string($_POST['mensaje']);

    $sql = "INSERT INTO contacto (nombre, apellido, correo, mensaje) VALUES ('$nombre', '$apellido', '$correo_electronico', '$mensaje')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al insertar los datos']);
    }

    $conn->close();
}
?>