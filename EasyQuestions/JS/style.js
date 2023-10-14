function starto() {
	var tl = anime.timeline({
		easing: 'easeOutExpo',
		duration: 750
	});

	// Add children
	tl
	.add({
		targets: '.container',
		translateX: 1500,
		easing: 'spring',
	})
	.add({
		targets: '.answers',
		top: 50,
	})
	tl.play();
	start = true;
}
