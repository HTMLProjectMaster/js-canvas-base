const items = {
	layout: new Array,
	layer: function(name){
		for(let i = 0; i < items.layout.length; i++){
			if((items.layout[i].name == name)){	
				console.log('WARNING:	layer: "' + name + '" already exist, overwriting')
				system.free(name)
			}
		}
		let layer = new Object()
		layer.name = name
		layer.content = new Array
		items.layout.push(layer)
		console.log('INFO:	layer: "' + name + '" created')	
		
	},
	stow: function(name, position){	
		for(var i = 0; i < items.layout.length; i++){
			if(items.layout[i].name == name){	
				console.log('INFO:	moved: "' + name + '" to position: "' + position + '"')
				if (position >= items.layout.length) {
					let j = position - items.layout.length + 1;
					while (j--) {
					items.layout.push(undefined);
					}
				}
				items.layout.splice(position, 0, items.layout.splice(i, 1)[0]);
			}
		}
	},
	free: function(name){
		for(let i = 0; i < items.layout.length; i++){
			if(items.layout[i].name == name){
				items.layout.splice(i, 1)
				console.log('INFO:	freed: "' + name + '"')
			}
		}
	},
	clear: function(){
		for(const layers of items.layout){
			for(let i = 0; i < layers.content.length; i++){
				if(layers.content[i].del == true){
					console.log('INFO:	deleted: "' + layers.content[i].name + '"')
					layers.content.splice(i, 1)
				}
			}
		}

	}
}
