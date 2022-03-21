<?php
include 'library.php'; // include the library file
include "classes/class.phpmailer.php"; // include the class name

	$name=$_POST['name'];
	$phone ="";
	if($_POST['phone']!="Telephone No.")
		$phone=$_POST['phone'];
	
	$email=$_POST['email'];
	$comments=strip_tags($_POST['comments']);
	$msg="";
				
	$to=SMTP_TO;
	$subject="New enquiry posted in Haggoel Web site!";
	
	$mail	= new PHPMailer; // call the class 
	$mail->IsSMTP(); 
	$mail->Host = SMTP_HOST; //Hostname of the mail server
	$mail->Port = SMTP_PORT; //Port of the SMTP like to be 25, 80, 465 or 587
	$mail->SMTPAuth = true; //Whether to use SMTP authentication
	$mail->Username = SMTP_UNAME; //Username for SMTP authentication any valid email created in your domain
	$mail->Password = SMTP_PWORD; //Password for SMTP authentication
	$mail->AddReplyTo("sender@graffitopaints.com", "Haggoel InterMedia"); //reply-to address
	$mail->SetFrom("sender@graffitopaints.com", "Haggoel InterMedia"); //From address of the mail
		
	$mail->Subject = $subject; //Subject od your mail
	$mail->AddAddress($to, "Haggoel InterMedia"); //To address who will receive this email
	
	$msg = "<b>".$name.", posted  enquiry form</b><br/><br/>";
	$msg .= "<b>Details</b><br/><br/>";
	$msg .= "<table width='100%'>";
	$msg .= "<tr><td width='30%'>Name </td><td>".$name."</td></tr>";
	$msg .= "<tr><td>Phone</td><td>".$phone."</td></tr>";
	$msg .= "<tr><td>Email</td><td>".$email."</td></tr>";
	$msg .= "<tr><td>Comments</td><td>".$comments."</td></tr>";
	$msg .= "</table>";			
	$mail->MsgHTML($msg); //Put your body of the message you can place html code here
	$send = $mail->Send(); //Send the mails
	if($send){
		echo '<center><h3 style="color:#009933;">Mail sent successfully</h3></center>';
	}
	else{
		echo '<center><h3 style="color:#FF3300;">Mail error: </h3></center>'.$mail->ErrorInfo;
	}
	
	
?>