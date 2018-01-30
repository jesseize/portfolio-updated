<?php

if(isset($_POST["contact"])) {

  $to = $_POST["email"];
  $subject = "Contact form submission.";
  $txt = "From: ". $_POST["email"] . "\r\n";
  $txt .= "Name: ". $_POST["name"] . " ". $_POST["last_name"]. " \r\n";
  $txt .= "Phone number: ". $_POST["phone_number"] . "\r\n";
  $txt .= "Message: ". $_POST["message"] . "\r\n";
  $headers = "From: ". $_POST["email"] . "\r\n";

  mail("info@jesseizeboud.com",$subject,$txt,$headers);

}

?>
