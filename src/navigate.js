 /*
  * Click url navigation
  */
define(['sprout/dom', 'sprout/router'], function ($, router) {
	'use strict';

	$(function () {
		$('body').on('click.url.data-api', '[data-url]', function (e) {
			var url = $(this).attr('data-url');

			if (url !== "") {
				e.preventDefault();

				router.defaultRouter.navigate(url);
			}
		});
	});
});