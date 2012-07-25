 /*
  * Page menu
  */
define(['sprout/dom', 'sprout/router'], function ($, router) {
	'use strict';

	$(function () {
		$('.page-menu').each(function () {
			var menu = $(this),
				routes = {};

            menu.find('[data-url]').each(function () {
				var item = $(this),
					url = item.attr('data-url');

                routes[url] = {
                    path: url,
                    start: function () {
						item.tab('show');
                    }
                };
            });

            router.defaultRouter.add(routes);
		});
	});
});