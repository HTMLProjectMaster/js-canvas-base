class dummyPolygon{
	constructor(points, col){
		this.points = points
		this.col = col
	}
	update(){this.draw()}
	draw(){
		for(let i = 0; i < this.points.length - 1; i++){
			for(let j = 1; j < this.points.length; j++){
				util.line(this.points[i].x, this.points[i].x, this.points[j].x, this.points[j].y, this.col)	
			}
		}
	}
}
