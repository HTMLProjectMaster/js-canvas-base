const canvas = {
	init: function(){
		this.dom = document.getElementsByTagName('canvas')[0]
		this.context = this.dom.getContext('2d')
	},
	rescale: function(){
		this.dom.width = window.innerWidth
		this.dom.height = window.innerHeight
	},
	clear: function(){
		this.context.clearRect(0, 0, this.dom.width, this.dom.height)	
	},
	refresh: function(){
		this.clear()
		for(const layers of item.layout){
			for(let i = 0; i < layers.content.length; i++){	
				layers.content[i].update()
			}
		}
	}
}
