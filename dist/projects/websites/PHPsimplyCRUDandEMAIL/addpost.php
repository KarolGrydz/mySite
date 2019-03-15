<?php
	require('config/config.php');
	require('config/db.php');

	// Create Query
	$query = 'SELECT * FROM posts ORDER BY created_at DESC';

	// Get Result
	$result = mysqli_query($conn, $query);

	// Fetch Data
	$posts = mysqli_fetch_all($result, MYSQLI_ASSOC);

	$msg = '';
	$msgClass = '';

	// Check For Submit
	if(filter_has_var(INPUT_POST, 'submit')){
		// Get form data
		$title = mysqli_real_escape_string($conn, htmlspecialchars($_POST['title']));
		$body = mysqli_real_escape_string($conn, htmlspecialchars($_POST['body']));
		$author = mysqli_real_escape_string($conn,htmlspecialchars($_POST['author']));
		//MAX POSTS 5
		if (count($posts) > 5) {
			$msg = "Error, too many posts. Please delete some.";
			$msgClass = 'alert-danger';
		} else {

			if (!empty($title) && !empty($body) && !empty($author)) {
				if(strlen($title) > 15 || strlen($author) > 15) {
					$msg = "Error, title or author is too long";
					$msgClass = 'alert-danger';
				} else {
					//dodanie do bazy danych
					$query = "INSERT INTO posts(title, author,body) VALUES('$title', '$author', '$body')"; 
					//Jak wszystko ok, powrot do strony głównej
					if(mysqli_query($conn, $query)){
						header('Location: '.ROOT_URL.'');
					} else {
						echo 'ERROR: '. mysqli_error($conn);
					}
				}
			} else {
				$msg = "Error, please insert datas to all fields";
				$msgClass = 'alert-danger';
			}
		}
	}

	// Free Result
	mysqli_free_result($result);

	// Close Connection
	mysqli_close($conn);

?>

<?php include('inc/header.php'); ?>

	<?php if ($msg != ''): ?>
		<div class="alert <?php echo $msgClass; ?>"><?php echo $msg; ?></div>
	<?php endif; ?>

	<div class="container">
		<h1>Add Post</h1>
		<form method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
			<div class="form-group">
				<label>Title</label>
				<input type="text" name="title" class="form-control" value="<?php echo isset($_POST['title']) ? $title : ''; ?>">
			</div>
			<div class="form-group">
				<label>Author</label>
				<input type="text" name="author" class="form-control" value="<?php echo isset($_POST['author']) ? $author : ''; ?>">
			</div>
			<div class="form-group">
				<label>Body</label>
				<textarea name="body" class="form-control"><?php echo isset($_POST['body']) ? $body : ''; ?></textarea>
			</div>
			<input type="submit" name="submit" value="Submit" class="btn btn-primary">
		</form>
	</div>
<?php include('inc/footer.php'); ?>