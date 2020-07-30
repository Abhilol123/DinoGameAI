class Cactus    {
    constructor()   {
        this.x = width;
        this.y = height - 40;
        this.width = 30;
        this.height = random(30, 100);
        this.velocity = 8;
    }

    update()    {
        this.x = this.x - this.velocity;
    }

    hits(dino)   {
        if  (((dino.x + dino.width) >= this.x) && ((dino.x) <= (this.x + this.width)))  {
            if (((dino.y  - dino.height) <= this.y) && (dino.y >= (this.y - this.height)))   {
                return true;
            }
        }
        else{
            return false;
        }
    }

    show()  {
        fill(0, 100, 0);
        rectMode(CORNERS);
        rect(this.x, this.y, this.x + this.width, this.y - this.height);
    }
}
