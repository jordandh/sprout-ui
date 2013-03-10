 /*
  * Click message publishing
  */
define(['sprout/util', 'sprout/dom', 'sprout/pubsub'], function (_, $, pubsub) {
	'use strict';

	$(function () {
		$('body').on('click.publish.data-api', '[data-publish]', function (e) {
			var $this = $(this),
				message = $this.attr('data-publish'),
				info = {};

			if ($this.is('.disabled, :disabled') || message === "") {
				return;
			}

			e.preventDefault();

			_.each($this.attrs(), function (value, name) {
				if (_.startsWith(name, 'data-publish-')) {
					info[_.strRight(name, 'data-publish-')] = value;
				}
			});

			pubsub.publish(message, info, this);
		});
	});
});