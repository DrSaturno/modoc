<?php
if (isset($_POST['recaptchaResponse1']) || isset($_POST['recaptchaResponse2'])) {
	$destino = "contacto@modoc.com.ar";
	$nombre = $_POST["nombreEnviar"];
	$mail = $_POST["mailEnviar"];
	$mensaje = $_POST["mensajeEnviar"];
	$contenido = "Nombre: " . $nombre . "\nMail: " . $mail ."\nMensaje: " . $mensaje;
	mail($destino, "Mail de pagina web", $contenido);
}
header("Location: index.html");
