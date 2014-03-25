 /*
  * Click message publishing
  */
define(['sprout/util', 'sprout/dom', 'sprout/pubsub'], function (_, $, pubsub) {
	'use strict';

	$(function () {
		$('body').on('click.publish.data-api', '[data-publish]', function (event) {
			var $this = $(this),
				message = $this.attr('data-publish'),
				info = {};

			if (message === "" || $this.is('.disabled, :disabled, [data-publish-disabled]') || !_.isUndefined($(event.target).attr('data-publish-prevent'))) {
				return;
			}

			if (_.isUndefined($this.attr('data-publish-default'))) {
				event.preventDefault();
			}

			_.each($this.attrs(), function (value, name) {
				if (_.startsWith(name, 'data-publish-')) {
					info[_.strRight(name, 'data-publish-')] = value;
				}
			});

			pubsub.publish(message, info, this);

			// If the message should only be published once then remove the data-publish attribute to prevent another message from being published
			if (!_.isUndefined($this.attr('data-publish-once'))) {
				$this.removeAttr('data-publish');
			}
		});
	});
});