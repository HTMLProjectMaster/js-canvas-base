const input = {
	mouse: {
		position: {
			x: undefined,
			y: undefined
		},
		radius: 50,
		button: new Array
	},
	keyboard: {
		key: new Array
	}
}
document.addEventListener('keydown', 
	function(event){
		if(!input.keyboard.key.includes(event.keyCode)){
			input.keyboard.key.push(event.keyCode)
		}
	}, 
	true
)
document.addEventListener('keyup',
	function(event){
		if(input.keyboard.key.includes(event.keyCode)){
			input.keyboard.key = input.keyboard.key.filter(item => item !== event.keyCode)
		}
	}, 
	true
)
document.addEventListener('mousemove', function(event){
	input.mouse.position.x = event.x
	input.mouse.position.y = event.y
})
document.addEventListener('mousedown',
	function(event){
		if(!input.mouse.button.includes(event.button)){
			input.mouse.button.push(event.button)
		}
	}
)
document.addEventListener('mouseup',
	function(event){
		if(input.mouse.button.includes(event.button)){
			input.mouse.button = input.mouse.button.filter(item => item !== event.button)
		}
	}
)
