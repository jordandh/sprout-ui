 /*
  * nav-tabs
  */
define(['sprout/dom', 'sprout/util', 'sprout/router'], function ($, _, router) {
	'use strict';

	$(function () {
		$('.nav-tabs, .nav-pills').each(function () {
			var menu = $(this),
				routes = {};

            menu.find('[data-url]').each(function () {
				var item = $(this),
					url = item.attr('data-url');

                routes[_.uniqueId('nav-tabs.') + '.' + url] = {
                    path: url,
                    start: function () {
						item.tab('show');
                    }
                };
            });

            // Default url for the naked page url
            menu.find('[data-default-url]').each(function () {
				var item = $(this),
					url = item.attr('data-url') || '';

                routes[_.uniqueId('nav-tabs.') + (url ? '.' : '') + url + '.default-url'] = {
                    path: '',
                    start: function () {
						item.tab('show');
                    }
                };
            });

            router.defaultRouter.add(routes);
		});
	});
});