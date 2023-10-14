window.addEventListener('keydown', ({ keyCode }) => {
    switch(keyCode) {
        case 65:
            keys.leftPressed = true;
            break

        case 83: 
            player.velocity.y += 20;
            break

        case 68: 
            keys.rightPressed = true;
            break

        case 87: 
            player.velocity.y -= 15;
            break
    }
})

window.addEventListener('keyup', ({ keyCode }) => {
    switch(keyCode) {
        case 65:
            keys.leftPressed = false;
            break

        case 83: 
            player.velocity.y = 1;
            break

        case 68: 
            keys.rightPressed = false;
            break

        case 87: 
            player.velocity.y = 1;
            break
    }
})