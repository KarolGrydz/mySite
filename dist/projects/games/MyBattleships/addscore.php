<?php 
	require('src/php/config/config.php');
	require('src/php/config/db.php');

	$query = 'SELECT * FROM scores ORDER BY points';

	$result = mysqli_query($conn, $query);

	$scores = mysqli_fetch_all($result, MYSQLI_ASSOC);

	$msg = '';
	$msgClass = '';


	if (isset($_GET["w"])) {
		$point = $_GET["w"];
		$lenghtOfScores = count($scores);
		$testVar = $scores[$lenghtOfScores - 1];

		if ($point <= $testVar['points']) {
			if (filter_has_var(INPUT_POST, 'submit')) {
				$name = mysqli_real_escape_string($conn, htmlspecialchars($_POST['name']));

				if (!empty($name)) {
					$query = "INSERT INTO scores(name, points) VALUES('$name', '$point')";

					if(mysqli_query($conn, $query)){
						$arrayNmb = count($scores);
						$numb = $testVar['points'];

						if ($arrayNmb >= 10) {
							$query = "DELETE FROM scores WHERE points='$numb'";
							mysqli_query($conn, $query);
						}

						header('Location: '.ROOT_URL.'');
					} else {
						echo 'ERROR: '. mysqli_error($conn);
					} 
				} else {
					$msg = "Nie podałeś imienia";
					$msgClass = 'alert-danger';
					}
				}
			} else {
				header('Location: '.ROOT_URL.'');
			}
		}  else {
		echo "Error nie ma punktow";
	}

 ?>

<?php require('header.php'); ?>

<h1>Dodaj swój wynik</h1>
<div class="wrapper">
	<?php if ($msg != ''): ?>
	<div class="alert <?php echo $msgClass; ?>"><?php echo $msg; ?></div>
<?php endif; ?>
	<div class="grid-1">
		<form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
			<input type="text" name="name" class="point-field">
			<h3>Twoje punkty: <?php echo $point; ?></h3>
			<input type="submit" name="submit" value="Zatwierdź" class="button">
		</form>
	</div>
</div>

<?php require('footer.php'); ?>