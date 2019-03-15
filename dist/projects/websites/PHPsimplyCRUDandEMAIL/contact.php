<?php 
	require('config/config.php');
	require('config/db.php');

	$msg = '';
	$msgClass = '';

	if (filter_has_var(INPUT_POST, 'submit')) {

		$name = htmlspecialchars($_POST['name']);
		$email = htmlspecialchars($_POST['email']);
		$message = htmlspecialchars($_POST['message']);

		if (!empty($name) && !empty($email) && !empty($message)) {
			//check the email
			if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
				$msg = 'Please use a valid email adres';
				$msgClass = 'alert-danger';
			} else {
				// Passed
					$toEmail = 'support@kg.glogow.pl';
					$subject = 'Contact requset from '.$name;
					$body = "<h2>Contact Request</h2>
							 <h4>Name</h4><p>".$name."</p>
							 <h4>Email</h4><p>".$email."</p>
							 <h4>Message</h4><p>".$message."</p>";

					//Email headers
					$headers = "MIME-Version: 1.0"."\r\n";
					$headers .= "Content-Type:text\html;charset=UTF-8" . "
						\r\n";

					//Additional Headers
					$headers .= "From: ".$name. "<".$email.">"."\r\n";

					if (mail($toEmail, $subject, $body, $headers)) {
						#Email Send
						$msg = 'Successful send Email';
						$msgClass = 'alert-success';
					} else {
						$msg = 'Not send';
						$msgClass = 'alert-danger';
					}
			}
		} else {
			$msg = 'Please fill all the fields.';
			$msgClass = 'alert-danger';
		}
	}
 ?>

<?php include('inc/header.php'); ?>

	<?php if ($msg != ''): ?>
		<div class="alert <?php echo $msgClass; ?>"><?php echo $msg; ?></div>
	<?php endif; ?>

	<div class="container">
		<h1>Have question? Write it!</h1>
		<form method="post">
			<div class="form-group">
				<label>Imię</label>
				<input type="text" name="name" class="form-control" value="<?php echo isset($_POST['name']) ? $name : ''; ?>">
			</div>
			<div class="form-group">
				<label>Email</label>
				<input type="text" name="email" class="form-control" value="<?php echo isset($_POST['email']) ? $email : ''; ?>">
			</div>
			<div class="form-group">
				<label>Wiadomość</label>
				<textarea name="message" class="form-control"><?php echo isset($_POST['message']) ? $message : ''; ?></textarea>
			</div>
			<br>
			<button type="submit" class="btn btn-primary" name="submit">Wyślij!</button>
		</form>
	</div>

<?php include('inc/footer.php'); ?>