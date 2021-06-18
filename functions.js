jQuery(document).ready(function( $ ) {
	var dt = new Date();
	var time = dt.getHours();

	$('#delyvery-hour option').filter(function(){
	return parseInt(this.value,10) < time;
	}).remove();
});