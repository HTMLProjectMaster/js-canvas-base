class dummyMoveParticle{
	constructor(pos, col, type, name, life, size){
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.velocity = {
			x: undefined, 
			y: undefined
		}
		this.color = col
		this.scale = size
		this.name = name
		this.type = type
		this.launched = false
		this.fallspeed = 0.025
		this.life = life
		this.time = 0
	}
	update(){
		this.launch()
		this.decelerate()
		this.move()
		this.fall()
		this.live()
	}
	launch(){
		if(!this.launched){
			this.launched = true
			this.velocity.x = Math.floor(Math.random() * Math.floor(3) - 1) * Math.floor(Math.random() * Math.floor(9) + 1) * (this.scale / 10)
			this.velocity.y = Math.floor(Math.random() * Math.floor(-2)) * Math.floor(Math.random() * Math.floor(9) + 1) * (this.scale / 10)
		}
	}
	decelerate(){
		this.velocity.x = this.velocity.x / 1.2
		this.velocity.y = this.velocity.y / 1.2
	}
	move(){
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
	fall(){
		this.time += 1
		this.position.y += (this.fallspeed * (this.time * 20)) * (this.scale / 10)
	}
	live(){
		if(this.life > 0){
			this.life -= 1
			this.draw()	//need to change to system.clear() once fixed
		}
	}
	draw(){
		canvas.context.beginPath()
		canvas.context.fillStyle = 'white'
		canvas.context.fillRect(this.position.x, this.position.y, this.scale, this.scale)
		canvas.context.closePath()
	}
}
