let system = {
	dom: {
		head: undefined,
		body: undefined
	},
	objectArray: new Array,
	init: function(){
		console.log('INFO:	system started')
		system.sleep(100).then(() => {	
			system.dom.head = document.getElementsByTagName('head')[0]
			system.dom.body = document.getElementsByTagName('body')[0]
			system.load('canvas', 'canvas', null, system.dom.body)
			system.load('script', 'script-library', 'modules/library.js', system.dom.head)
			system.sleep(100).then(() => {
				canvas.init()
				system.loop()
			})
		})
	},
	loop: function(){
		requestAnimationFrame(system.loop)
		if(canvas.item.width != window.innerWidth || canvas.item.height != window.innerHeight){canvas.rescale()}
		canvas.refresh()
	},
	sleep: function(tick){return new Promise(resolve => setTimeout(resolve, tick))},
	load: function(type, id, src, dir){
		let element = document.createElement(type)
		element.id = id
		element.src = src
		dir.appendChild(element)
	},
	call: function(obj, pos){
		let element = new obj(pos)
		system.objectArray.push(element)
	},
	clear: function(){
		for(let i = 0; i < system.objectArray.length; i++){
			if(system.objectArray[i].del === true){
				system.objectArray.slice(i, 1)
				i--
			}
		}
	}
}
system.init()
