const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext('2d');

var key = [];
var mouseX = 0;
var mouseY = 0;
canvas.width = innerWidth;
canvas.height = innerHeight;
window.addEventListener('resize', function () {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	player.x = canvas.width/2;
	player.y = canvas.height/2;
	Inventory.y =  canvas.height-70;
	Inventory.x =  canvas.width-canvas.width+20;
	player.fistX = canvas.width/2;
	player.fistY = canvas.height/2;
	player.healthX = player.x + 2;
})
//keyCode
window.addEventListener('keydown', function (e) {
	key[e.key] = true;
})
window.addEventListener('keyup', function (e) {
	key[e.key] = false;
})

//player status

console.log(canvas.width*2, canvas.height*2);
var mapX = 0;mapY = 0;mapWidth = canvas.width*2;mapheight = canvas.height*2;

//map
class Overworld {
	constructor() {
		this.width = canvas.width*2;
		this.height = canvas.height*2;
		this.x = mapX;
		this.y = mapY;
		this.PointWidth = 20;
		this.PointHeight =20;
		this.Pointx = Math.floor(Math.random() * this.width);
		this.Pointy = Math.floor(Math.random() * this.height);
		this.houseImage = new Image();
		this.houseImage.src = "GameIcons/house.png";
		this.hY = 150;
		this.hX = 1150;
		this.hWidth = 150;
		this.hHeight = 150;
	}
	mapWall() {
		if (mapX == 456) {
			player.CanMoveLeft = false;
		}else {
			player.CanMoveLeft = true;
		}
		if (mapX == -1500) {
			player.CanMoveRight = false;
		}else {
			player.CanMoveRight = true;
		}
		if (mapY == -654) {
			player.CanMoveDown = false;
		}else {
			player.CanMoveDown = true;
		}
		if (mapY == 201) {
			player.CanMoveUp = false;
		}else {
			player.CanMoveUp = true;
		}
	}
	shopHouse() {
		ctx.drawImage(player.shadow,
			this.x+1150,
			this.y+200,
			150, 150);
		ctx.drawImage(this.houseImage,
			this.hX,
			this.hY,
			150, 150);
	}
	draw() {
		ctx.fillStyle = '#2ECC71';
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = 'black';
		ctx.font = "30px Verdana";
		ctx.fillText("Doors - " + doorOpened,800,60);
	}
}
const overworld = new Overworld();

var dead = document.createElement("p");
var count = document.createElement("b");
var Died = false;
var counter = setInterval(function(){
	if (Died) {
		if (count2 > 0) {
			count2 -= 1;
		}
		count.innerHTML = count2;
	}
	
}, 1000);


var count2 = 6;

//the main place

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	overworld.draw();
	for (var i = 0; i < tree.length; i++) {
		tree[i].drawShadow();
		tree[i].treeRoot();
	}
	for (var i = 0; i < door.length; i++) {
		door[i].Draw();
	}
	overworld.shopHouse();
	player.draw();
	player.update();
	for (var i = 0; i < Enemy.length; i++) {
		
		Enemy[i].enemyUpdate();
		Enemy[i].draw();
	}
	for (var i = 0; i < tree.length; i++) {
		tree[i].draw();
	}
	if (count2 == 0) {
		document.querySelector("#restart").style.display = "block";
		document.getElementById('res').style.display = "none"; 
	}else{
		document.querySelector("#restart").style.display = "none";
	}
	collisionDetection();
	handleDoors();
	keyCollision();
	overworld.mapWall();
	Key.draw();
	player.keycollected();
	handleTrees();
	doorCollision();
	handleEnemys();
	shopCollision();
	// weapon.angle = -5 * Math.PI / 180;
	
	requestAnimationFrame(animate);
	// if (revived) {
	// 	player.opacity -= 1;
	// 	if (player.opacity == 0) {
	// 		revived = false;
	// 	}
	// }
	Inventory.draw();
	icons.draw();
}
var started = false;

function start() {
	if (started == false) {
		animate();
		started = true;
		document.querySelector(".startScreen").style.zIndex = 100;
		document.querySelector(".startScreen").style.display = "none";
	}
}


var deadCheck = false;
var healthIcon = "GameIcons/health.png";

function restart(counter) {
	for (var i = 0; i < Enemy.length; i++) {
		if (deadCheck) {
			player.health = 46;
			player.playerCanMove = true;
			player.color = 'red';
			Enemy[i].EnemyX = player.x - 250;
			Enemy[i].EnemyY = player.y - 250;
			deadCheck = false;
			player.playerWidth = 50;
			player.playerHeight = 50;
			player.x = canvas.width/2;
			player.y = canvas.height/2;
			player.speed = 3;
			setTimeout(function() {
				for (var j = 0; j < Enemy.length; j++) {
					Enemy[j].EnemyCanMove = true;
				}
			}, 1000);
			document.getElementById('dead').style.top = "150%"; 
			document.getElementById('restart').style.top = "150%"; 
			document.getElementById('res').style.top = "150%"; 
			setTimeout(function(){
				dead.remove(); 
			}, 500);
			clearInterval(counter);
			count2 = 6;
			Died = false;
			revived = true;
			player.healthWidth = 30;
		}
	}
	
}
var revived = false;
var canGoShop = false;

function shopCollision() {
	if (player.x < overworld.hX + overworld.hWidth &&
		player.x + player.playerWidth > overworld.hX &&

		player.y < overworld.hY + overworld.hHeight &&
		player.y + player.playerHeight > overworld.hY 
		) {
		document.querySelector("#Go").style.opacity = "100%";
		canGoShop = true;
	}else {
		document.querySelector("#Go").style.opacity = "0%";
	}
}
