class dummyCube{
	constructor(pos, col, type, name){
		this.pos = pos
		this.col = col
		this.type = type
		this.name = name
		this.points = {
			a: {x: 0 + this.pos.x, y: 0 + this.pos.y},	
			b: {x: 100 + this.pos.x, y: 0 + this.pos.y},	
			c: {x: 100 + this.pos.x, y: 100 + this.pos.y},
			d: {x: 0 + this.pos.x, y: 100 + this.pos.y},
	
			e: {x: 25 + this.pos.x, y: -25 + this.pos.y},
			f: {x: 125 + this.pos.x, y: -25 + this.pos.y},
			g: {x: 125 + this.pos.x, y: 75 + this.pos.y},
			h: {x: 25 + this.pos.x, y: 75 + this.pos.y}
		}

	}
	update(){this.draw()}
	draw(){
		util.line(this.points.a.x, this.points.a.y, this.points.b.x, this.points.b.y, this.col)
		util.line(this.points.b.x, this.points.b.y, this.points.c.x, this.points.c.y, this.col)
		util.line(this.points.c.x, this.points.c.y, this.points.d.x, this.points.d.y, this.col)
		util.line(this.points.d.x, this.points.d.y, this.points.a.x, this.points.a.y, this.col)

		util.line(this.points.e.x, this.points.e.y, this.points.f.x, this.points.f.y, this.col)
		util.line(this.points.f.x, this.points.f.y, this.points.g.x, this.points.g.y, this.col)
		util.line(this.points.g.x, this.points.g.y, this.points.h.x, this.points.h.y, this.col)
		util.line(this.points.h.x, this.points.h.y, this.points.e.x, this.points.e.y, this.col)

		util.line(this.points.a.x, this.points.a.y, this.points.e.x, this.points.e.y, this.col)
		util.line(this.points.b.x, this.points.b.y, this.points.f.x, this.points.f.y, this.col)
		util.line(this.points.c.x, this.points.c.y, this.points.g.x, this.points.g.y, this.col)
		util.line(this.points.d.x, this.points.d.y, this.points.h.x, this.points.h.y, this.col)
	}
}
