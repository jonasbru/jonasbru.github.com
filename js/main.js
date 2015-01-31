$( document ).ready(function() {
	$(".project").hover(function () {
		$(this).find("figure").addClass("active");
	}, function () {
		$(this).find("figure").removeClass("active");
	});
});