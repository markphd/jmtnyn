$(function  () {
	var all = $("#og-grid > li");
	var elIllust = $('.sidebar li:first-child');
	var elPhoto = $('.sidebar li:nth-child(2)');
	// var elPrint = $('.sidebar li:nth-child(3)');
	var elAll = $('.sidebar li:last-child');

	function showIllust() {
		$('.illustration').show(200);
		console.log("Im running showIllust()");
	}

	function showPhoto() {
		$('.photo').show(200);
		console.log('Im running showPhoto()');
	}

	// function showPrint() {
	// 	$('.print').show(200);
	// 	console.log('Im running showPrint()');
	// }

	elAll.on('click', function(e) {
		e.preventDefault();
		all.hide();
		all.show(200);
		console.log("clicked");
	});

	elIllust.on('click', function(e) {
		e.preventDefault();
		all.hide();
		showIllust();
	});

	elPhoto.on('click', function(e) {
		e.preventDefault();
		all.hide();
		showPhoto();
	});

	// elPrint.on('click', function(e) {
	// 	e.preventDefault();
	// 	all.hide();
	// 	showPrint();
	// });
});