system.call(
	new dummySquare(
		{
			x: window.innerWidth / 2 - 50,
			y: window.innerHeight / 2 - 50
		},
		'#fff', 'dummy',
		'Dummy Cube',
		100,
		util.rng(2**31)
	),
	'layer-dummy'
)
