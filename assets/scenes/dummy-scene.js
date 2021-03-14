system.call(
	new dummyCube(
		{
			x: window.innerWidth / 2 - 50,
			y: window.innerHeight / 2 - 50
		},
		'#fff', 'dummy',
		'Dummy Cube',
		100,
		utils.rng(2**31)
	),
	'layer-dummy'
)
