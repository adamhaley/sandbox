dla.smileage.const = {
  'stageItem':['START','END','PHOTO','STATUS_MESSAGE','PUNCH','STICKER']
}

dla.smileage.config = {
  // include everything that we might want to tweak, including poll frequency
}

dla.smileage.stage = {
	'items':[],
	'addItem':function(info){
		// required: type, snapshot
		switch(info.type){
			case dla.smileage.const.stageItem.PUNCH:
				dla.smileage.timeline.redraw();
				dla.smileage.map.redraw();
				break;
		}
	}
}

// FROM AJAX CALL:
itemData = ('data we pull get back from getTripInfo()');

dla.smileage.stage.addItem({
  'type': dma.smileage.const.stageItem.PUNCH
  , 'snapshot': {
  		'id':itemData.id
  		, 'latLon': [itemData.snapshot.lat,itemData.snapshot.lon]
  		, 'timestamp': itemData.snapshot.timestamp
	}
});