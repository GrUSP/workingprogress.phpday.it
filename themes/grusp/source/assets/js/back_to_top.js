document.addEventListener("DOMContentLoaded", () => {
	var myNav = document.getElementById('back_to_top');
	window.onscroll = function () {
		"use strict";
		if (document.body.scrollTop >= document.body.clientHeight || document.documentElement.scrollTop >= document.documentElement.clientHeight) {
			myNav.classList.remove("is-hidden");
		}
		else {
			myNav.classList.add("is-hidden");
		}
	}
});