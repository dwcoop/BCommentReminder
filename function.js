/*
 * Blogger 留言提醒外掛
 * 張睿玹版權所有
 * https://github.com/dwcoop/BCommentReminder/license.html
 * 版本: V1.0.0
 * 日期: 2019-06-08T15:27Z
 */
$(function() {
	var settings = window.BCommentReminder_settings
	$("#comment-editor").on("load", function() {
		if ($("#remindUser").length != 0) {
			$("#remindUser").html("");
		}
		var e = $(
			"\<\div id=\'remindUser\' class=\'" +
			settings.class +
			"\'\>\<\/div\>"
		);
		switch (settings.type) {
			case "html":
				e.html(settings.string);
				break;
			case "text":
				e.text(settings.string);
				break;
			default:
				e.text(settings.string)
		}
		$("#comment-editor").before(e)
	})
});
