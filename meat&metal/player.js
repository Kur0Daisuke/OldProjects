var current;
var playerX = 450;
var playerY = 200;
var mouseX;
var mouseY;
let canvasPos = getPosition(canvas);
window.addEventListener('mousemove', function (e) {
	mouseX = e.clientX - canvasPos.x;
	mouseY = e.clientY - canvasPos.y;
})

function getPosition(el) {
      let xPosition = 0;
      let yPosition = 0;

      while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
      }
      return {
        x: xPosition,
        y: yPosition
      };
}
class Player{
	constructor() {
		this.x = canvas.width/2;
		this.y = canvas.height/2;
		this.speed = 3;
		this.color = 'red';
		this.playerCanMove = true;
		this.playerWidth = 50;
		this.playerHeight = 50;
		this.image = new Image();
		this.image.src = "GameIcons/sprite-0002.gif";
		this.fist = new Image();
		this.fist.src = "GameIcons/playerfist.png";
		this.fistWidth = 70;
		this.fistX = canvas.width/2+50;
		this.fistY = canvas.height/2+50;
		this.fistAngle = Math.atan2(mouseY * Math.PI / 180, mouseX * Math.PI / 180);
		this.shadow = new Image();
		this.shadow.src = "GameIcons/treeShadow.png";
		this.CanMoveRight = true;
		this.CanMoveLeft = true;
		this.CanMoveDown = true;
		this.CanMoveUp = true;
		this.health = 46;
		this.healthX = this.x+2;
		this.healthColor = 'lime';
		this.healthIcon = new Image();
		this.healthIcon.src = "GameIcons/health.png";
		this.angle = 0;
		this.healthWidth = 30;
		this.opacity = 100;
		this.plusing = true;
		this.minusing = false;
		this.canTakeDamage = true;
	}
	update() {
		if (this.CanMoveLeft && this.playerCanMove && key && key["a"] || this.playerCanMove && key && key["ArrowLeft"]) {
			overworld.x += this.speed; mapX += this.speed;
			for (var i = 0; i < Enemy.length; i++) {
				Enemy[i].EnemyX += this.speed;
			}Key.keyX += this.speed;
			overworld.Pointx += this.speed;
			for (var i = 0; i < tree.length; i++) {
				tree[i].x += this.speed;
			}
			for (var i = 0; i < door.length; i++) {
				door[i].doorX += this.speed;
			}
			current = "+x";
			overworld.hX += this.speed;
			// Key.mapDX += this.speed /29;
		}
		if (this.CanMoveRight && this.playerCanMove && key && key["d"] || this.playerCanMove && key && key["ArrowRight"]) {
			overworld.x -= this.speed; mapX -= this.speed;
			for (var i = 0; i < Enemy.length; i++) {
				Enemy[i].EnemyX -= this.speed;
			}
			Key.keyX -= this.speed;
			overworld.Pointx -= this.speed;
			for (var i = 0; i < tree.length; i++) {
				tree[i].x -= this.speed;
			}
			for (var i = 0; i < door.length; i++) {
				door[i].doorX -= this.speed;
			}
			current = "-x";
			overworld.hX -= this.speed;
			// Key.mapDX -= this.speed /70;
		}
		if (this.CanMoveUp && this.playerCanMove &&key && key["w"] || this.playerCanMove && key && key["ArrowUp"]) {
			overworld.y += this.speed; mapY += this.speed;
			for (var i = 0; i < Enemy.length; i++) {
				Enemy[i].EnemyY += this.speed;
			}
			Key.keyY += this.speed; 
			overworld.Pointy += this.speed;
			for (var i = 0; i < tree.length; i++) {
				tree[i].y += this.speed;
			}
			for (var i = 0; i < door.length; i++) {
				door[i].doorY += this.speed;
			}
			current = "+y";
			overworld.hY += this.speed;
			// Key.mapDY += this.speed /16;
		}
		if (this.CanMoveDown && this.playerCanMove && key && key["s"] || this.playerCanMove && key && key["ArrowDown"]) {
			overworld.y -= this.speed; mapY -= this.speed;
			for (var i = 0; i < Enemy.length; i++) {
				Enemy[i].EnemyY -= this.speed;
			}
			Key.keyY -= this.speed;
			overworld.Pointy -= this.speed;
			for (var i = 0; i < tree.length; i++) {
				tree[i].y -= this.speed;
			}
			for (var i = 0; i < door.length; i++) {
				door[i].doorY -= this.speed;
			}
			current = "-y";
			overworld.hY -= this.speed;
			// Key.mapDY -= this.speed /30;
		}

		if (this.health < 1) {
			this.canTakeDamage = false;
			DeathScene();
		}
		if (this.health < 23) {
			this.healthColor = 'orange';
		}else {
			this.healthColor = 'lime';
		}
		this.angle += 1 * Math.PI / 180;
		this.fistAngle = Math.atan2(mouseY * Math.PI / 180, mouseX * Math.PI / 180);
		
	}
	keycollected(){
		if (Key.Keyhold) {
			Key.keyX = this.x + 20;
			Key.keyY = this.y + 20;
			Key.image.src = "GameIcons/sprite-0004.png";
			this.speed = 2;
		}
	}
	draw() {
		let x_midpoint = canvas.width / 2;
    	let y_midpoint = canvas.height / 2;
    	let diffX = mouseX - x_midpoint;
      	let diffY = mouseY - y_midpoint;
		ctx.fillStyle = this.color;
		ctx.drawImage(this.shadow,
			this.x+10,
			this.y+50,
			35, 30);
		ctx.drawImage(this.image,
			this.x,
			this.y,
			this.playerWidth, this.playerHeight);

		ctx.save();
			ctx.translate(this.fistX, this.fistY);
			ctx.rotate(Math.atan2(diffY, diffX));
			ctx.drawImage(this.fist,
			this.fistWidth / -2,
			this.fistWidth / -2,
			this.fistWidth, this.fistWidth);
			ctx.restore();

		ctx.fillStyle = 'black';
		ctx.fillRect(this.x, this.y+55, 50, 10);
		ctx.fillStyle = this.healthColor;
		ctx.fillRect(this.healthX, this.y+57, this.health, 5);
		if (revived) {
			ctx.save();
			ctx.globalAlpha = this.opacity;
			ctx.translate(this.x, this.y);
			ctx.rotate(this.angle);
			ctx.drawImage(this.healthIcon,
			this.healthWidth / -2,
			this.healthWidth / -2,
			this.healthWidth, this.healthWidth);
			ctx.restore();
		}
	}
}
const player = new Player();

function DeathScene() {
	player.health = 2;
	player.color = 'transparent';
	player.playerCanMove = false;
	for (var j = 0; j < Enemy.length; j++) {
		Enemy[j].EnemyCanMove = false;
		Enemy[j].EnemyX = 150;
	}

	dead.innerHTML = "U Died!";
	dead.id = "dead";
	count.id = "res";
	document.querySelector(".gameContainer").appendChild(dead);
	document.querySelector(".gameContainer").appendChild(count);
	setTimeout(function(){
		document.getElementById('dead').style.top = "30%";
		document.getElementById('restart').style.top = "70%";
		document.getElementById('res').style.top = "70%";
		document.getElementById('res').style.display = "block"; 
	}, 100);
	if (Key.Keyhold && Died) {
		if (Key.keyX != player.x - 150) {
			Key.keyX -= 1;
		}
		if (Key.keyY != player.y - 150) {
			Key.keyY -= 1;
		}
	}
	Key.Keyhold = false;
	Died = true;
	Key.image.src = "GameIcons/sprite-0003.gif";
	deadCheck = true;
}