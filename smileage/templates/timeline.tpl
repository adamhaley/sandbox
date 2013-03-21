<div id="timeline-events">
	<div id="timeline-trip">
		{{#drives}}
			<div class="start"></div>
			{{#stickers}}
				<div class="sticker">

				</div>
			{{/stickers}}
			{{#punches}}
				<div class="punch">
				</div>
			{{/punches}}
			{{#photos}}
				<div class="photo"></div>
			{{/photos}}
			{{#comments}}
				<div class="comments"></div>
			{{/comments}}
		{{/drives}}
		{{^isComplete}}
			<div class="current"></div>
		
		{{/isComplete}}
	</div>
</div>