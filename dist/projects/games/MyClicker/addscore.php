<?php 
	require('src/php/config/config.php');
	require('src/php/config/db.php');

	$query = 'SELECT * FROM records ORDER BY points';

	$result = mysqli_query($conn, $query);

	$records = mysqli_fetch_all($result, MYSQLI_ASSOC);

	$msg = '';
	$msgClass = '';

	if (isset($_GET["w"])) {
		$point = $_GET["w"];
		$testVar = $records[0];

		if ($point <= $testVar['points']) {
			header('Location: '.ROOT_URL.'');
		} else {
			if (filter_has_var(INPUT_POST, 'submit')) {
				$name = mysqli_real_escape_string($conn, htmlspecialchars($_POST['name']));

				if (!empty($name)) {
					$query = "INSERT INTO records(name, points) VALUES('$name', '$point')";

					if(mysqli_query($conn, $query)){
						$arrayNmb = count($records);
						$numb = $testVar['points'];

						if ($arrayNmb >= 10) {
							$query = "DELETE FROM records WHERE points='$numb'";
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
			}
		
	} else {
		echo "Error nie ma punktow";
	}

	mysqli_free_result($result);

	mysqli_close($conn);

 ?>

 <?php require('header.php'); ?>

 	<div class="container score">
 		<div class="row text-center">
 			<h1>Dodaj swój wynik</h1>
 			<?php if ($msg != ''): ?>
				<div class="alert <?php echo $msgClass; ?>"><?php echo $msg; ?></div>
			<?php endif; ?>
 				<form method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
 					<div class="form-group ">
 						<div class="col-md-3"></div>
 						<div class="col-md-6"><input type="text" name="name" class="form-control"></div>
 						<div class="col-md-3"></div>
 					</div>
 					<div class="col-md-12">
 						<h3>Twoje punkty: <?php echo $point; ?></h3>
 					</div>
 					<div class="col-md-12">
 						<input type="submit" name="submit" value="Zatwierdź" class="btn btn-primary">
 					</div>
 				</form>
 			
 		</div>
 	</div>

<?php require('vievscore.php'); ?>

<footer>	

		<a href="myClickerEN.html">English version</a>
		<p>Stworzone przez <a href="http://www.kg.glogow.pl">Ranald</a> 2016, Wszelkie prawa zastrzeżone</p>
	</footer>

	<script src="./src/js/jquery-3.1.1.min.js"></script>
	<script src="./src/js/bootstrap.min.js"></script>
	<script src="./src/js/myClicker.js"></script>