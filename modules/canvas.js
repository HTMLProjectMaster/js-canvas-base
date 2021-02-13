let canvas = {
	init: function(){
		this.item = document.getElementsByTagName('canvas')[0]
		this.context = this.item.getContext('2d')
	},
	rescale: function(){
		this.item.width = window.innerWidth
		this.item.height = window.innerHeight
	},
	clear: function(){
		this.context.clearRect(0, 0, this.item.width, this.item.height)	
	},
	refresh: function(){
		this.clear()
		for(const layers of system.layout){
			for(let i = 0; i < layers.content.length; i++){	
				layers.content[i].draw()
			}
		}
	}
}
