function dummyCube(pos, col, size){	
	return {
		name: 'cube',
		draw: function(){
			canvas.context.beginPath();
			canvas.context.lineWidth = "6";
			canvas.context.strokeStyle = col;
			canvas.context.rect(pos.x, pos.y, pos.x + size, pos.y + size); 
			canvas.context.stroke();	
		}
	}
}
