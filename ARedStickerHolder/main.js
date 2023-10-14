const canvas = document.querySelector(".screen");
const ctx = canvas.getContext('2d');

canvas.clientWidth = window.innerWidth;
canvas.clientHeight = window.innerHeight;

const gravity = 1.5;

var keys = {
    leftPressed: false,
    rightPressed: false,
}

function drawBg() {
    ctx.fillStyle = "green"
    ctx.fillRect(0, 145, 1000, 200);
}

function init() {
    const step = () => {
        ctx.clearRect(0,0,canvas.width, canvas.height)
        drawBg();
        platforms.forEach((platform) => {
            platform.init();
        })
        player.init();

        if(keys.rightPressed && player.x < 260) {
            player.velocity.x = 2;
        } else if(keys.leftPressed && player.x > 50) {
            player.velocity.x = -2;
        }else { 
            player.velocity.x = 0;

            if(keys.rightPressed) {
                platforms.forEach((platform) => {
                    platform.x -= 2;
                })
                
            }else if(keys.leftPressed) {
                platforms.forEach((platform) => {
                    platform.x += 2;
                })
                
            }
        }

        platforms.forEach((platform) => {
            if(player.y + player.height <= platform.y && 
                player.y + player.height + player.velocity.y >= platform.y &&
                player.x + player.width >= platform.x &&
                player.x <= platform.x + platform.width){
                player.velocity.y = 0;
            }
        })

        requestAnimationFrame(step);
    }
    step();
}
init();