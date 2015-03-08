(function($) {
	var image = []
	
	var getGif = function() {
		var gif = [];
		$('img').each(function() {
			var data = $(this).data('gif');
			gif.push(data);
		});
		return gif;
	}

	var gif = getGif();

	for (var i = gif.length - 1; i >= 0; i--) {
		image[i]     = new Image();
		image[i].src = gif[i];
	};

	$('figure').on('click', function() {
		var $index = $(this).index();
		$(this).children('img').attr('src', image[$index].src);
	});

})(jQuery);