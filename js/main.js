$( document ).ready(function() {
	$(".project").hover(function () {
		$(this).find("figure").toggleClass("active");
	});
});