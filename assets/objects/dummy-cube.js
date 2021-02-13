function dummyCube(pos, col, size){	
	return {
		name: 'cube',
		draw: function(){
			canvas.context.beginPath();
			canvas.context.fillStyle = col;
			canvas.context.fillRect(pos.x, pos.y, pos.x + size, pos.y + size); 
			canvas.context.closePath()	
		}
	}
}
