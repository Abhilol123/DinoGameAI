let D = [];
let C = [];
let counter = 0;
let save = [];
let total = 100;
let generation = 0;
let speed;

function setup()    {
    createCanvas(640, 360);
    for (let i = 0; i < total; i++) {
        let n = new NN(3, 2, 1, [4]);
        brain = NN_child.createChild(n)
        D.push(new Dino(brain))
    }
    speed = createSlider(1, 100, 1);
}

function draw() {
    for (let n = 0; n < speed.value(); n++)   {
        background(200);

        fill(100, 75, 50);
        rectMode(CORNERS);
        rect(0, height, width, height - 40);

        for (let i = 0; i < D.length; i++)  {
            D[i].think(C);
            D[i].update();
            D[i].show();
        }

        if (counter > 100)  {
            if (Math.random() < 0.5 && counter % 60 == 0)    {
                C.push(new Cactus());
                counter = 0;
            }
        }

        for (let i = 0; i < C.length; i++)  {
            C[i].update();
            C[i].show();

            for (let j = 0; j < D.length; j++)  {
                if (C[i].hits(D[j]))    {
                    save.push(D.splice(j, 1)[0]);
                    j--;
                }
            }

            if (C[i].x + C[i].width < 0)    {
                C.splice(i, 1);
                i--;
            }
        }

        counter++;

        if (D.length === 0) {
            let pop = new Population(total, save);
            D = pop.nextGen();
            counter = 0;
            C = []
            generation++;
            console.log(generation)
        }
    }
}
