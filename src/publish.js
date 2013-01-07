 /*
  * Click message publishing
  */
define(['sprout/util', 'sprout/dom', 'sprout/pubsub'], function (_, $, pubsub) {
	'use strict';

	$(function () {
		$('body').on('click.publish.data-api', '[data-publish]', function (e) {
			var $this = $(this),
				message = $this.attr('data-publish'),
				info;

			if ($this.is('.disabled, :disabled') || message === "") {
				return;
			}

			e.preventDefault();

			info = $(this).attr('data-publish-info');

			pubsub.publish(message, _.isString(info) ? JSON.parse(info) : null, this);
		});
	});
});