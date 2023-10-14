var mapStartX = mapX - mapWidth + 100;
var mapStartY = mapY - mapheight + 100;
var mapEndX = mapX + mapWidth - 150;
var mapEndY = mapY + mapheight - 200;

var doorStartX = mapX - mapWidth;
var doorStartY = mapY - mapheight;
var doorEndX = mapX + mapWidth;
var doorEndY = mapY + mapheight;

class trees{
	constructor() {
		this.x = Math.floor(Math.random() * mapStartX) + mapEndX;
		this.y = Math.floor(Math.random() * mapStartY) + mapEndY;
		this.width = 50;
		this.treeWidth = 150;
		this.treeHeight = 150;
		this.height = 100;
		this.image = new Image();
    	this.image.src = "GameIcons/tree.png";
    	this.Rootimage = new Image();
    	this.Rootimage.src = "GameIcons/root.png";
    	this.Shadow = new Image();
    	this.Shadow.src = "GameIcons/treeShadow.png";
	}
	draw() {
		ctx.drawImage(this.image,
        this.x,
        this.y,
        this.treeWidth, this.treeHeight);
	}
	treeCollision() {
		if (playerX < this.x - this.width) {
			console.log("left");
		}
	}
	treeRoot() {
		ctx.drawImage(this.Rootimage,
        this.x + 50,
        this.y + 80,
        this.width, this.height);
	}
	drawShadow() {
		ctx.drawImage(this.Shadow,
        this.x + 20,
        this.y + 130,
        this.width + 50, this.height);
	}
}
const tree = [];
var treeTotal = 0;

function handleTrees() {
	if (treeTotal < 25) {
		tree.push(new trees());
		treeTotal++;
	}

	for (var i = 0; i < tree.length; i++) {
		if (player.x + player.width > tree[i].width - tree[i].width) {
			alert("testing");
		}
	}
}
