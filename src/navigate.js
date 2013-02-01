 /*
  * Click url navigation
  */
define(['sprout/dom', 'sprout/router'], function ($, router) {
	'use strict';

	$(function () {
		$('body').on('click.url.data-api', '[data-url]', function (e) {
			var $this = $(this),
				url = $this.attr('data-url'),
				target, href;

			if (url !== "") {
				target = $this.attr('data-target');
				href = $this.attr('href');

				if ((!target || $(target).length > 0) && router.defaultRouter.match(href).length > 0) {
					e.preventDefault();
					router.defaultRouter.navigate(url);
				}
				else {
					document.location = href || url;
				}
			}
		});
	});
});