class dummySquare{
	constructor(pos, col, type, name, size, index){	
		this.index = index;
		this.name = name;
		this.type = type;
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.color = col;
		this.scale = size;
	}
	update(){this.draw()}
	draw(){
		canvas.context.beginPath();
		canvas.context.fillStyle = this.color;
		canvas.context.fillRect(this.position.x, this.position.y, this.scale, this.scale);
		canvas.context.closePath();
	}
}

