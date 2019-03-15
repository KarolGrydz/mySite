<?php 
	require('config/config.php');
	require('config/db.php');

	//get ID
	$id = mysqli_real_escape_string($conn, $_GET['id']);

	//Create query
	$query = 'SELECT * FROM posts WHERE id='.$id;

	//get result
	$result = mysqli_query($conn, $query);

	//Fetch data
	$post = mysqli_fetch_assoc($result);
	//var_dump($posts);
	//Free the result
	mysqli_free_result($result);

	//close connection
	mysqli_close($conn);
 ?>

<?php include 'inc/header.php'; ?>
	<div class="container">
		<a class="btn btn-default" href="<?php echo ROOT_URL; ?>">Back</a>
		<h1 class="text-center"><?php echo $post['title']; ?></h1>
		<small>Created on <?php echo $post['created_at']; ?> by <?php echo $post['author']; ?></small>
		<p><?php echo $post['body']; ?></p>
		<br>
		<a href="<?php echo ROOT_URL; ?>/editpost.php?=id<?php echo $post['id']; ?>" class="btn btn-default">Edit</a>
	</div>
<?php include 'inc/footer.php'; ?>