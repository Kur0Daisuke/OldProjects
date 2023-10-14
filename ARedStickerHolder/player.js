class Weapon{
    constructor(user) {
        this.user = user;
        this.width = this.user.width + 10;
        this.height = this.user.height - 10;
    }
    draw() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.user.x, this.user.y, this.width, this.height)
    }
    init() {
        this.draw();
    }
}

class Player{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.sprite = new Image();
        this.sprite.src = "spriteCharacterBeta.png";
        this.width = 10;
        this.height = 15;
        this.color = "black";
        this.velocity = {
            x: 100,
            y: 1,
        };
        this.weapon = new Weapon(this);
        
    }
    draw() {
        ctx.fillStyle = "black"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    update(){
        this.weapon.init();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        
        if(this.y + this.height + this.velocity.y + 4 <= canvas.height) {
            this.velocity.y += gravity;
        } else this.velocity.y = 0;
    }
    init() {
        this.update();
        this.draw();
    }
}

const player = new Player();

