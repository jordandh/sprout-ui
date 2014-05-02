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
                    url = item.attr('data-url'),
                    urls = item.attr('data-routes');

                urls = _.isString(urls) ? urls.split(',') : [url];

                _.each(urls, function (routeUrl) {
                    routeUrl = _.trim(routeUrl);

                    routes[_.uniqueId('nav-tabs.') + '.' + routeUrl] = {
                        path: routeUrl,
                        start: function () {
                            item.tab('show');
                        }
                    };
                });
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