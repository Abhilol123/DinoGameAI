class Dino  {
    constructor(brain)   {
        this.x = 40;
        this.y = height - 40;
        this.width = 30;
        this.height = 60;
        this.velocity = 0;
        this.but = false;
        this.brain = brain;
        this.label;
    }

    think(C) {
        if (C.length > 0)   {
            let close = C[0];
            let inputs = Matrix.fromArray([close.x/width, close.height/height, this.velocity/150]);
            let out = this.brain.predict(inputs);
            if (out.data[0] > out.data[1])    {
                this.jump();
            }
        }
    }

    update()    {
        if (this.y < height - 40 || this.but)    {
            this.velocity = this.velocity + 1;
            this.y = this.y + this.velocity;
            this.but = false;
        }
        else    {
            if (this.y >= height)
            this.velocity = 0;
            this.y = height - 40;
        }
    }

    show()  {
        fill(51);
        rectMode(CORNERS);
        rect(this.x, this.y, this.x + this.width, this.y - this.height);
    }

    jump()  {
        if (this.y === height - 40) {
            this.velocity = -20;
            this.but = true
        }
    }
}
