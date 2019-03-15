<?php
	require('header.php');
	require('src/php/scores.php');
?>

<body>
	<div class="board">
		<h1 id="title">Gra w statki</h1>
		<div id="messageArea"></div>
		<div id="numberOfHitArea"></div>
		<table onclick = "controler.startFunction(event)">
			<tr>
				<td id="00"></td>
				<td id="01"></td>
				<td id="02"></td>
				<td id="03"></td>
				<td id="04"></td>
				<td id="05"></td>
				<td id="06"></td>
			</tr>
			<tr>
				<td id="10"></td>
				<td id="11"></td>
				<td id="12"></td>
				<td id="13"></td>
				<td id="14"></td>
				<td id="15"></td>
				<td id="16"></td>
			</tr>
			<tr>
				<td id="20"></td>
				<td id="21"></td>
				<td id="22"></td>
				<td id="23"></td>
				<td id="24"></td>
				<td id="25"></td>
				<td id="26"></td>
			</tr>
			<tr>
				<td id="30"></td>
				<td id="31"></td>
				<td id="32"></td>
				<td id="33"></td>
				<td id="34"></td>
				<td id="35"></td>
				<td id="36"></td>
			</tr>
			<tr>
				<td id="40"></td>
				<td id="41"></td>
				<td id="42"></td>
				<td id="43"></td>
				<td id="44"></td>
				<td id="45"></td>
				<td id="46"></td>
			</tr>
			<tr>
				<td id="50"></td>
				<td id="51"></td>
				<td id="52"></td>
				<td id="53"></td>
				<td id="54"></td>
				<td id="55"></td>
				<td id="56"></td>
			</tr>
			<tr>
				<td id="60"></td>
				<td id="61"></td>
				<td id="62"></td>
				<td id="63"></td>
				<td id="64"></td>
				<td id="65"></td>
				<td id="66"></td>
			</tr>
		</table>
	</div>
	<div class="rules">
		<h3>Zasady gry</h3>
		<p>Na mapie są 3 statki, za każdym razem losowo umieszczane.<br/>
			Gracz strzela aż do momentu zatopienia wszystkich statków.<br/>
			Gra kończy się w momencie zatopienia 3 statków.<br/>
			Nowa gra F5</p>
	</div>

	<button id="modalBtn" class="button">Wyniki</button>

	<?php
		require('vievscore.php');
	?>

		<script src="src/js/myBattleships.js"></script>
</body>

<?php
	require('footer.php');
?>