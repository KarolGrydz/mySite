<div id="simplyModal" class="modal">
		<div class="modal-content">
			<div class="modal-header">
				<span class="closeBtn">&times;</span>
				<h2>Najlepsi strzelcy</h2>				
			</div>
			<div class="modal-body">
				<table>
		      		<tr>
		      			<th>Lp</th>
		      			<th>Imie</th>
		      			<th>Oddane strzały</th>
		      		</tr>
		      		<?php foreach($scores as $score) : ?>
						<tr>
							<th><p><?php echo $lp=$lp+1; ?></p></th>
							<th><p><?php echo $score['name']; ?></p></th>
							<th><p><?php echo $score['points']; ?></p></th>
						</tr>
		    		<?php endforeach; ?>
		      	</table>
			</div>
			<div class="modal-footer">
				<button id="closeModalFooter" class="closeModal">Zamknij</button>
			</div>
		</div>
	</div>