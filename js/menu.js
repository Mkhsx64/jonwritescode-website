	$(document).ready(function() {
	$(".burger, .menu").click(function(){
		$(this).parent().find(".hide").slideToggle();
	});
});