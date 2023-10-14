class enemy{
	constructor(){
		this.EnemyWidth = 50;
		this.EnemyHeight =50;
		this.EnemyX = 0;
		this.EnemyY = 0;
		this.EnemyCanMove = true;
		this.angle = 0;
		this.EnemySpeed = 1.5;
		this.image = new Image();
		this.image.src = "GameIcons/sprite-0001.gif";
	}
	enemyUpdate() {
		if (this.EnemyCanMove && this.EnemyX > player.x) {
			this.EnemyX -= this.EnemySpeed;
		}else if (this.EnemyCanMove && this.EnemyX < player.x) {
			this.EnemyX += this.EnemySpeed;
		}
		if (this.EnemyCanMove && this.EnemyY > player.y) {
			this.EnemyY -= this.EnemySpeed;
		}else if (this.EnemyCanMove && this.EnemyY < player.y) {
			this.EnemyY += this.EnemySpeed;
		}
	}
	draw() {
		ctx.drawImage(this.image,
			this.EnemyX,
			this.EnemyY,
			this.EnemyWidth, this.EnemyHeight);
	}
}

const Enemy = [];
enemyCount = 5;

function handleEnemys() {
	enemyCount = document.getElementById("enemy").value;
	if (enemyCount < 5) {
		enemyCount = 5;
	}
	if (Enemy.length < enemyCount) {
		Enemy.push(new enemy());
		for (var i = 0; i < Enemy.length; i++) {
			Enemy[i].EnemyY = Math.floor(Math.random() * 1000 || -1000);
			Enemy[i].EnemyX = Math.floor(Math.random() * 1000 || -1000);
		}
	}
}

function collisionDetection() {
	//colision with player
	for (var i = 0; i < Enemy.length; i++) {
		if (player.canTakeDamage && player.x < Enemy[i].EnemyX + Enemy[i].EnemyWidth &&
			player.x + player.playerWidth > Enemy[i].EnemyX &&

			player.y < Enemy[i].EnemyY + Enemy[i].EnemyHeight &&
			player.y + player.playerHeight > Enemy[i].EnemyY 
			) {
			player.health -= 0.1;
		}else if (!player.canTakeDamage && player.x < Enemy[i].EnemyX + Enemy[i].EnemyWidth &&
			player.x + player.playerWidth > Enemy[i].EnemyX &&

			player.y < Enemy[i].EnemyY + Enemy[i].EnemyHeight &&
			player.y + player.playerHeight > Enemy[i].EnemyY ) {
			player.healthWidth -= 1;
			if (player.healthWidth == 0) {
				revived = false;
				player.canTakeDamage = true;
			}	
		}
	}
}


