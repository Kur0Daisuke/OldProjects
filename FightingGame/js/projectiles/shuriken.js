class Shuriken{
	constructor() {
		this.x;
		this.y;
		this.direction;
		this.velocity = {
			x: 0,
			y: 0
		}
		this.shot = false;
		this.width = 50;
		this.height = 50;
	}
	draw() {
		c.fillStyle = 'black'
		c.fillRect(this.x, this.y, this.width, this.height)
	}
	move() {
		if(this.direction === 'right') {
			
			this.velocity.x = 40;
			this.shot = true;
			setTimeout(() => {
				this.velocity.x = 0;
				this.shot = false;
			}, 1000)
			console.log(this.x)
		}else {
			this.velocity.x = -40;
			setTimeout(() => {
				this.velocity.x = 0;
			}, 1000)
			console.log(this.x)
		}
	}
	update() {
		this.x += this.velocity.x;
		if(this.x + 50 >= enemy.position.x && this.x <= enemy.position.x + enemy.width &&
        	this.y + this.height >= enemy.position.y && this.y <= enemy.position.y + enemy.height){
			enemy.health -= 5;
			document.querySelector('#enemyHealth').style.width = enemy.health + '%';
		}
	}
	start(x,y,direction) {
		if(!this.shot) {
			this.x = x;
			this.y = y + 50;
			this.direction = direction;
			this.move();
		}
	}
}