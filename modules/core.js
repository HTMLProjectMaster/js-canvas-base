const system = {
	dom: {
		head: undefined,
		body: undefined
	},	
	init: function(){
		console.log('INFO:	system started')
		util.sleep(100).then(() => {	
			system.dom.head = document.getElementsByTagName('head')[0]
			system.dom.body = document.getElementsByTagName('body')[0]
			system.load('canvas', 'canvas', null, system.dom.body)
			system.load('script', 'script-library', 'modules/library.js', system.dom.head)
			util.sleep(100).then(() => {
				canvas.init()
				system.loop()
			})
		})
	},
	loop: function(){
		requestAnimationFrame(system.loop)
		if(canvas.dom.width != window.innerWidth || canvas.dom.height != window.innerHeight){canvas.rescale()}
		canvas.refresh()	
	},
	load: function(type, id, src, dir){
		let element = document.createElement(type)
		element.id = id
		element.src = src
		dir.appendChild(element)
		console.log('INFO:	loaded: "' + element.id + '"')
	},
	call: function(object, layerName, silent){
		if(!item.layout.some(layer => layer.name == layerName)){
			item.layer(layerName)
		}
		
		for(const layers of item.layout){
			if(layers.name == layerName){
				layers.content.push(object)
				if(!silent){
					console.log('INFO:	called: "' + object.name + '"')
				}
			}
		}
	}
}

window.onload = system.init()
