class Platform{
    constructor(x,y) {
        this.width = 50;
        this.height = 15;
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    init() {
        this.draw();
    }
}

const platforms = [new Platform(100, 100), new Platform(30, 40)];