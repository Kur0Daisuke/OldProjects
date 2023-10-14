var inventoryIcons = {
	shield : "GameIcons/shield.png",
	health : "GameIcons/healthpower.png",
	stronger : "GameIcons/fist.png",
	swift : "GameIcons/swiftness.png",
}
class inventoryBoxes{
	constructor(x, y) {
		this.shield = new Image();
		this.shield.src = inventoryIcons.shield;
		this.health = new Image();
		this.health.src = inventoryIcons.health;
		this.fist = new Image();
		this.fist.src = inventoryIcons.stronger;
		this.swift = new Image();
		this.swift.src = inventoryIcons.swift;
		this.x = x;
		this.y = y;
		this.width = 50;
		this.height = 50;
	}
	draw() {
		ctx.drawImage(this.shield,
			this.x,
			this.y,
			this.width, this.height);
		ctx.drawImage(this.health,
			this.x + 50,
			this.y,
			this.width, this.height);
		ctx.drawImage(this.fist,
			this.x + 100,
			this.y,
			this.width, this.height);
		ctx.drawImage(this.swift,
			this.x + 150,
			this.y,
			this.width, this.height);
	}
}

var icons;

class inventory{
	constructor() {
		this.y =  canvas.height-70;
		this.x =  canvas.width-canvas.width+20;
		this.width = 500;
		this.height = 50;
	}
	draw() {
		icons = new inventoryBoxes(this.x, this.y);
		ctx.fillStyle = "#663931";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
const Inventory = new inventory();