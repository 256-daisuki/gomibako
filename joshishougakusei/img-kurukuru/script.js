document.querySelector(`img`).animate(
	[
		{ transform: 'rotate(0deg)' },
		{ transform: 'rotate(360deg)' }
	],
	{
		duration: 75,
		easing: 'linear',
		iterations: Infinity
	}
);