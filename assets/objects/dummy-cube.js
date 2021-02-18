function dummyCube(pos, col, size){	
	return {	
		name: 'cube',
		position: {
			x: pos.x,
			y: pos.y
		},
		color: col,
		scale: size,
		draw: function(){
			canvas.context.beginPath();
			canvas.context.fillStyle = this.color;
			canvas.context.fillRect(this.position.x, this.position.y, this.scale, this.scale); 
			canvas.context.closePath()	
		}
	}
}
