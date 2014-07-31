(function(w) {
		var timer;

		$(w).bind('mousewheel', function(e) {
			if(!($('body').hasClass("withScroll"))) {
				$('body').addClass("withScroll");
				$(w).scrollTop();
				setTimeout(function() {
					$(this).trigger(e);
				}, 10);
			}

			clearTimeout(timer);
			timer = setTimeout(refresh, 200);
		});

		var refresh = function refresh() {
			if($('body').hasClass("withScroll"))
				$('body').removeClass("withScroll");
		};
})(window);
