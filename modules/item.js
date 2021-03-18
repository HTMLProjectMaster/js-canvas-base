const item = {
	layout: new Array,
	layer: function(name){
		for(let i = 0; i < item.layout.length; i++){
			if((item.layout[i].name == name)){	
				console.log('WARNING:	layer: "' + name + '" already exist, overwriting')
				system.free(name)
			}
		}
		let layer = new Object()
		layer.name = name
		layer.content = new Array
		item.layout.push(layer)
		console.log('INFO:	layer: "' + name + '" created')	
		
	},
	stow: function(name, position){	
		for(var i = 0; i < item.layout.length; i++){
			if(item.layout[i].name == name){	
				console.log('INFO:	moved: "' + name + '" to position: "' + position + '"')
				if (position >= item.layout.length) {
					let j = position - item.layout.length + 1;
					while (j--) {
					item.layout.push(undefined);
					}
				}
				item.layout.splice(position, 0, item.layout.splice(i, 1)[0]);
			}
		}
	},
	free: function(name){
		for(let i = 0; i < item.layout.length; i++){
			if(item.layout[i].name == name){
				item.layout.splice(i, 1)
				console.log('INFO:	freed: "' + name + '"')
			}
		}
	},
	clear: function(name){
		for(const layers of item.layout){
			for(let i = 0; i < layers.content.length; i++){
				if(layers.content[i].name == name){
					console.log('INFO:	deleted: "' + layers.content[i].name + '"')
					layers.content.splice(i, 1)
				}
			}
		}

	}
}
