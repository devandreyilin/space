<?php
header('Content-Type: text/html; charset=utf-8');
// Variables
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$place = trim($_POST["place"]);
$product_name = trim($_POST["product-name"]);




$pattern = "/(content-type|bcc:|cc:|to:)/i";

$to = 'example@examle.com';
$sub = "=?utf-8?B?". base64_encode("Сообщение с сайта ailindev.ru"). "?="; // You can define email subject
// HTML Elements for Email Body
$body = "Имя: $name<br>Телефон: $phone<br>Откуда: $place<br>Заявка на: $product_name";
//Must end on first column
$headers = "From: example@examle.com" ."\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
// PHP email sender
mail($to, $sub , $body, $headers);