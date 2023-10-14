var punchingDistance = 0;
var punching = false;
var punchHit = false;
var hitEnemyId = [];

window.addEventListener('click', function(e) {
	if (started) {
		punching = true;
		console.log("hello");
		setTimeout(function() {
			player.fistX = canvas.width/2+50;
			player.fistY = canvas.height/2+50;
			punching = false;
			punchingDistance = 0;
		}, 600);
	}
	
});

setInterval(function() {
	if (punching) {
		if (mouseX < player.fistX) {
			if (punchingDistance < 10) {
				player.fistX -= 10;
				punchingDistance++;
			}
		}if (mouseX > player.fistX) {
			if (punchingDistance < 10) {
				player.fistX += 10;
				punchingDistance++;
			}
		}if (mouseY < player.fistY) {
			if (punchingDistance < 10) {
				player.fistY -= 10;
				punchingDistance++;
			}
		}if (mouseY > player.fistY) {
			if (punchingDistance < 10) {
				player.fistY += 10;
				punchingDistance++;
			}
		}
	}
	for (var i = 0; i < Enemy.length; i++) {
		if (!Died && player.fistX < Enemy[i].EnemyX + Enemy[i].EnemyWidth &&
			player.fistX + player.fistWidth > Enemy[i].EnemyX &&

			player.fistY < Enemy[i].EnemyY + Enemy[i].EnemyHeight &&
			player.fistY + player.fistWidth > Enemy[i].EnemyY 
			) {
			punchHit = true;
			hitEnemyId.push(i);
			setTimeout(function () {
				for (var i = 0; i < Enemy.length; i++) {
					Enemy[i].EnemyCanMove = true;
				}
			}, 1300);
		}
	}
	for (var i = 0; i < hitEnemyId.length; i++) {
		if (!Died) {
		Enemy[hitEnemyId[i]].EnemyCanMove = false;
		setTimeout(function () {
			hitEnemyId = [];
		}, 100);
		
		}
	}
}, 100);