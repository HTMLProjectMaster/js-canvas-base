let system = {
	layout: new Array,
	dom: {
		head: undefined,
		body: undefined
	},	
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
		system.clear()
	},
	sleep: function(tick){return new Promise(resolve => setTimeout(resolve, tick))},
	load: function(type, id, src, dir){
		let element = document.createElement(type)
		element.id = id
		element.src = src
		dir.appendChild(element)
		console.log('INFO:	loaded: "' + element.id + '"')
	},
	layer: function(name){
		for(let i = 0; i < system.layout.length; i++){
			if((system.layout[i].name == name)){	
				console.log('WARNING:	layer: "' + name + '" already exist, overwriting')
				system.free(name)
			}
		}
		let layer = new Object()
		layer.name = name
		layer.content = new Array
		system.layout.push(layer)
		console.log('INFO:	layer: "' + name + '" created')	
		
	},
	call: function(object, layerName){	//example:	system.call(dummyCube({x: 25, y: 0}, 'blue'), 'layer_2')	system.call(dummyCube({x: 0, y: 0}, 'red'), 'layer_1')
		if(!system.layout.some(layer => layer.name == layerName)){
			system.layer(layerName)
		}
		
		for(const layers of system.layout){
			if(layers.name == layerName){	
				let element = object
				layers.content.push(object)
				console.log('INFO:	called: "' + element.name + '"')
			}
		}
	},
	stow: function(name, position){	
		for(var i = 0; i < system.layout.length; i++){
			if(system.layout[i].name == name){	
				console.log('INFO:	moved: "' + name + '" to position: "' + position + '"')
				if (position >= system.layout.length) {
					let j = position - system.layout.length + 1;
					while (j--) {
					system.layout.push(undefined);
					}
				}
				system.layout.splice(position, 0, system.layout.splice(i, 1)[0]);
			}
		}
	},
	free: function(name){
		for(let i = 0; i < system.layout.length; i++){
			if(system.layout[i].name == name){
				system.layout.splice(i, 1)
				console.log('INFO:	freed: "' + name + '"')
			}
		}
	},
	clear: function(){
		for(const layers of system.layout){
			for(let i = 0; i < layers.content.length; i++){
				if(layers.content[i].del == true){
					console.log('INFO:	deleted: "' + layers.content[i].name + '"')
					layers.content.splice(i, 1)
				}
			}
		}

	}
}
system.init()
