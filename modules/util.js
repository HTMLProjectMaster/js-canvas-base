let util = {	
	sleep: function(tick){
		return new Promise(resolve => setTimeout(resolve, tick))
	},
	rng: function(max){
		return Math.floor(Math.random() * Math.floor(max))
	},
	line: function(x1, y1, x2, y2, color){
		canvas.context.beginPath()
		canvas.context.strokeStyle = color
		canvas.context.moveTo(x1, y1)
		canvas.context.lineTo(x2, y2)	
		canvas.context.stroke()
		canvas.context.closePath()
	}
}
