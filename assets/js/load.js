
function fadeInPage() {
	if (!window.AnimationEvent) { return; }
	var referrer = document.referrer.split("#");
	var fader = document.getElementById('fader');
	fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
	if (!window.AnimationEvent) { return; }
	var anchors = document.getElementsByTagName("a");

	for (var i = 0; i < anchors.length; i ++) {
		if (anchors[i].classList.contains("scroll_top")) {
			anchors[i].addEventListener('click', function(event) {
				window.scrollTo({top: 0, behavior: 'smooth'});
			});
		}
		if (anchors[i].hostname !== window.location.hostname ||
			anchors[i].pathname === window.location.pathname) {
			anchors[i].addEventListener('click', function(event) {
				event.preventDefault();
			});
		}
		else {
			anchors[i].addEventListener('click', function(event) {
				var fader = document.getElementById('fader'),
						anchor = event.currentTarget;
				var listener = function () {
					window.location = anchor.href;
					fader.removeEventListener('animationend', listener);
				};
				fader.addEventListener('animationend', listener)
				event.preventDefault();
				fader.classList.add('fade-in');
			});
			window.addEventListener('pageshow', function (event) {
				if (!event.persisted) {
					return;
				}
				var fader = document.getElementById('fader');
				fader.classList.remove('fade-in');
			});
		};
	}
});

$(function() {

});
