var cpMode = 'ez'

function calculateDistance(p1x,p2x){
	let dir;
	if(p1x > p2x) {
		dir = 'right'
	}else if(p1x < p2x) {
		dir = 'left'
	}
	if(dir === 'left' && p2x - p1x > canvas.width/8) {
		return 'dashLeft'
	}else {
		return 'nothing'
	}

}

function move(destinationArrived) {
	if(!EnemyControllable && keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
	        enemy.velocity.x = -5;
	        enemy.switchSprite('run')
	    } else if(!EnemyControllable && keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
	        enemy.velocity.x = 5;
	        enemy.switchSprite('run')
	    }

	    if(!EnemyControllable && enemy.velocity.y < 0) {
	        enemy.switchSprite('jump')
	    } else if(!EnemyControllable && enemy.velocity.y > 0) {
	        enemy.switchSprite('fall')
	    }

	    if(enemy.velocity.y === 0) {
	    	enemy.canJump = true;
	    }

		if(!player.dead && !destinationArrived && player.position.x + 150 < enemy.position.x) {
			setTimeout(() => {
				keys.ArrowLeft.pressed = true;
            	enemy.lastKey = 'ArrowLeft'
			}, 300)
			
		}
		if(!player.dead && !destinationArrived &&player.position.x + 150 > enemy.position.x) {
			setTimeout(() => {
				keys.ArrowRight.pressed = true;
	            enemy.lastKey = 'ArrowRight'
            }, 300)
		}

		if(!player.dead && player.position.y < enemy.position.y) {
			setTimeout(() => {
				if(enemy.canJump) {
                	enemy.velocity.y = -20;
                	enemy.canJump = false;
            	}
			}, 300)
		}
}

function decreaseAttackCooldown(id) {
	setTimeout(() => {
		attackCooldowning = false
	}, 300)
}

function cp() {
	var destinationArrived = false;
	var attackCooldowning = false;
	if(!EnemyControllable && !enemy.dead) {
		setTimeout(() => {
			if(cpMode === 'evil' && !player.dead && rectangularCollision({
			        rectangle1: enemy,
			        rectangle2: player,
			    })) {
				playerSpeed = 10;
				enemySpeed = 6;
				if(!attackCooldowning) {
					enemy.position.x -= 20;
					enemy.attack()
					setTimeout(() => {
						attackCooldowning = true;
						decreaseAttackCooldown();
					}, 400)
				}
			}
			if(cpMode !== 'evil' && !player.dead && player.position.x + 150 === enemy.position.x
				) {
			    enemy.attack()
				
				destinationArrived = true;
				return
			}
		}, 500)

		move(destinationArrived);
		if(cpMode === 'evil') {
			enemy.damage = 3;
		}
	}
}