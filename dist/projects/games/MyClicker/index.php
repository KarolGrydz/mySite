<?php 
	require('src/php/records.php');
	require('header.php');
?>

	<div class="container-fluid text-center">
		<div class="row">
			<div class="col-md-12 col-sm-12 col-xs-12">
				<div class="main-page">
					<h1>Gra w klikacza</h1>
					<p>Ile razy jesteś w stanie kliknąć w przeciągu 10 sekund?<br/>
						Zabawa zaczyna sie od pierwszego klikniecia...</p>
					<button onclick="start()" class="btn btn-primary btn-lg">Kliknij mnie!</button>
					<p id="message"></p>
					<p id="timer"></p>
				</div>
			</div>
		</div>
		
	</div>

<?php require ('vievscore.php'); ?>

<?php require('footer.php'); ?>