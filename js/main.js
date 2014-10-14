$(document).ready(function() {
	$('.controler').on('click', 'button', function(event) {
		var idname = $(this).data('click');
		$('#'+ idname + '').attr("class", "activate");
	});
});