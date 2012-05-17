(function($){

	makeDraggable = function( dropzone, el) {
			el.find( "li" ).draggable({
				 //appendTo: 'body',  
				 //helper: "clone", 
				 //snap: true, 
				 start: function(event, ui) {
					
				 }, 
				 helper: function(event, ui) {
					
					var is_selected = $(event.target).first().hasClass("selected");
				 	// FIX: if dragging unselected measure reset the selection
					if( !is_selected ){
						// deselect the other measures
						el.find( "a" ).removeClass("selected");
						// select the target
						$(event.target).addClass("selected");
					}
					var selected = el.find( "a.selected" ).parent();
					if (selected.length === 0) {
					  selected = $(this);
					}
					
					var container = $('<ul/>').attr('class', 'draggingContainer');
					container.append(selected.clone());
					
					// disable selected
					selected.css({ opacity: 0.5 });
					
					return container; 
				 }, 
				 //connectToSortable: "#sortable",
				 revert: function(socketObj){
					 var selected = el.find( "a.selected" ).parent();
					//if false then no socket object drop occurred.
					 if(socketObj === false)
					 {
						 selected.css({ opacity: 1 }).find( "a").removeClass("selected");
						//revert the peg by returning true
						return true;
					 }
					 else
					 {
						//TEMP: Measures are not removed when dropped
						//selected.remove();
						 selected.css({ opacity: 1 }).find( "a").removeClass("selected");
						//return false so that the peg does not revert
						return false;
					 }
				 }, 
				 revertDuration: 0, 
				 // called at the end of every drag
				 stop: function(event, ui) {
				
				 }
			});
			
			
			dropzone.droppable({
				tolerance: 'touch', 
				activeClass: "ui-state-default",
				hoverClass: "ui-state-hover",
				accept: ":not(.ui-sortable-helper)",
				drop: function( event, ui ) {
					//$( this ).find( ".placeholder" ).remove();
					// add all selected in dropzone
					$(this).find(".list").append(ui.helper.children());
					// FIX: remove selected class from all links
					$(this).find(".list a").removeClass("selected");
					
					//$( "<p></p>" ).text( ui.draggable.text() ).appendTo( this );
				}
			});
			
			//var clicks = [];
			// functionality for keyboard clicks
			$("#measures-list").find( "a" ).click(function (e) {
				
				e.preventDefault();
				
				// if ctrl key (pc) or meta key (command on mac) is clicked, select multiple
				if(e.metaKey || e.ctrlKey) {
					$(this).toggleClass("selected");
				}
				
				// if shiftKey is clicked, select all between 2 selections (not currently working)
				else if(e.shiftKey) {
					
					// add selected class to item
					$(this).addClass("selected");
					
					// check if there is an option is already selected 
					// - add the index of the parent to the index of the measure
					var measures = $.map($("#measures-list").find("a").parent(),function(i){ return i; });
					var selected = $(measures).find("a.selected").parent();
					
					// find the clicked one in the selected array
					var index = $(measures).index( $(this).parent() );
					var start = Math.min( $(measures).index( $(selected).first() ), index);
					var end = Math.max( $(measures).index( $(selected).last() ) , index) - start + 1;
					
					var filter = measures.splice(start, end);
					
					console.log( start+", "+end );
					
					// deselect everything and select the filtered array
					$("#measures-list").find( "a" ).removeClass("selected");
					console.log( filter );
					$(filter).find("a").addClass("selected");
					
				} 
				
				// if no key is clicked, deselect any measure selected and select clicked measure
				else {
					$("#measures-list").find( "a" ).removeClass("selected");
					$(this).addClass("selected");
				}
				
				return false;
			});
	}

		
})(jQuery)
	
	
//	
	
	
	
	