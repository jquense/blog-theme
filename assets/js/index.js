'use strict';
jQuery(function($) {

	$('pre code').each(function(i, e) {
		hljs.highlightBlock(e);
	});


})