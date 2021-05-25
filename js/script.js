function newItem() {
	// add new item to list 
	let li = $('<li></li>');
	let inputValue = $('#input').val();
	li.append(inputValue);
	
	if (inputValue === '') {
		alert("You have to write something!");
	} else {
		$('#list').append(li);
	}
	
	// crossing item out
	function crossOut() {
		li.toggleClass("strike")
	}
	
	li.on("dblclick", crossOut);
	
	// add delete button
	let crossOutButton = $('<crossOutButton></crossOutButton>');
	crossOutButton.append(document.createTextNode('X'));
	li.append(crossOutButton);
	
	crossOutButton.on("click", deleteListItem);
	function deleteListItem() {
		li.addClass("delete") 
	}
	
	$('#list').sortable();
	
}