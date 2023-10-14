class keys{
	constructor() {
		this.keyWidth = 50;
		this.keyHeight = 50;
		this.Keyhold = false;
		this.keyX = 130;
		this.keyY = 130;
		this.image = new Image();
    	this.image.src = "GameIcons/sprite-0003.gif";
    	this.map = new Image();
    	this.map.src = "GameIcons/map.png";
    	this.mapDetail = new Image();
    	this.mapDetail.src = "GameIcons/bg.png";
    	this.mapDX = 30;
    	this.mapDY = 30;
	}
	draw(){
		ctx.drawImage(this.image,
        this.keyX,
        this.keyY,
        this.keyWidth, this.keyHeight);
        ctx.drawImage(this.mapDetail,
        this.mapDX,
        this.mapDY,
        50, 50);
        ctx.drawImage(this.map,
        15,
        15,
        80, 80);
        ctx.drawImage(player.image,
        45,
        45,
        15, 15);
	}
	keyUpdate() {
		if (player.x == keyY) {
			alert("something");
		}
	}
}
const Key = new keys();
var keyDropped = false;

canvas.onclick = function removeKey() {
	Key.Keyhold = false;
	keyDropped = true;
	setTimeout(function(){
		keyDropped = false;
		player.speed = 3;
	}, 1000);
}

function keyCollision() {
	if (!keyDropped && player.x < Key.keyX + Key.keyWidth &&
		player.x + player.playerWidth > Key.keyX &&

		player.y < Key.keyY + Key.keyHeight &&
		player.y + player.playerHeight > Key.keyY) {
		Key.Keyhold = true;
	}
}

// door open collision
function doorCollision() {
	for (var i = 0; i < door.length; i++) {
		if (Key.Keyhold && player.x < door[i].doorX + door[i].doorWidth &&
			player.x + player.playerWidth > door[i].doorX &&

			player.y < door[i].doorY + door[i].doorHeight &&
			player.y + player.playerHeight > door[i].doorY) {
			door[i].image.src = 'images/Sprite-0005.png';
			if (!door[i].opened) {
				doorOpened += 1;
				door[i].opened = true;
				console.log(doorOpened);
			}
		}
	}
}
var doorOpened = 0;
var doorId = 1; 
class doors {
	constructor() {
		this.doorX = Math.floor(Math.random() * doorStartX) + doorEndX;
		this.doorY = Math.floor(Math.random() * doorStartY) + doorEndY;
		this.doorWidth = 50;
		this.doorHeight = 50;
		this.doorColor = 'orange';
		this.image = new Image();
    	this.image.src = "images/sprite-0004.gif";
    	this.shadow = new Image();
    	this.shadow.src = "GameIcons/treeShadow.png";
    	this.doorId = doorId;
    	this.opened = false;
	}
	Draw() {
		ctx.drawImage(this.shadow,
        this.doorX,
        this.doorY+60,
        50, 60);
		ctx.drawImage(this.image,
        this.doorX,
        this.doorY,
        this.doorWidth, this.doorHeight+40);
        
	}
}

const door = [];
doorCount = 15;
playerDoorCount = 0;

function handleDoors() {
	if (door.length < doorCount) {
		door.push(new doors());
		doorId += 1;
	}
}