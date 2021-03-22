class dummyPolygon{
	constructor(points, col, type, name){
		this.points = points
		this.col = col
		this.name = name
		this.type = type
	}
	update(){this.draw()}
	draw(){
		for(let i = 0; i < this.points.length; i++){
			for(let j = 1; j < this.points.length; j++){
				util.line(this.points[i].x, this.points[i].x, this.points[j].x, this.points[j].y, this.col)	
			}
		}
	}
}
