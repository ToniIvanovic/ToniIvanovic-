(function() {
		var bodyEl = $('body'),
		navToggleBtn = bodyEl.find('.ntb');

		navToggleBtn.on('click', function(e) {
			bodyEl.toggleClass('active-nav');
			e.preventDefault();
		});

})();