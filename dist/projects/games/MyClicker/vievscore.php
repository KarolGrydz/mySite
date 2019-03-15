<!-- Modal -->
		<div id="myModal" class="modal fade" role="dialog">
		  <div class="modal-dialog">

		    <!-- Modal content-->
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		        <h2 class="modal-title text-center">Najlepsi klikacze</h2>
		      </div>
		      <div class="modal-body">
		      	<table>
		      		<tr>
		      			<th>Lp</th>
		      			<th>Imie</th>
		      			<th>Punkty</th>
		      		</tr>
		      		<?php foreach($records as $record) : ?>
						<tr>
							<th><p><?php echo $lp=$lp+1; ?></p></th>
							<th><p><?php echo $record['name']; ?></p></th>
							<th><p><?php echo $record['points']; ?></p></th>
						</tr>
		    		<?php endforeach; ?>
		      	</table>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>

		  </div>
		</div>