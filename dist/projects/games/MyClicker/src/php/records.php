<?php 

	require('config/config.php');
	require('config/db.php');

	$query = 'SELECT * FROM records ORDER BY points DESC';

	$result = mysqli_query($conn, $query);

	$records = mysqli_fetch_all($result, MYSQLI_ASSOC);

	$lp = 0;

	mysqli_free_result($result);

	mysqli_close($conn);
?>