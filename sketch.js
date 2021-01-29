var surface1,surface2,surface3,surface4;
var box;

var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    surface1 = createSprite(100,500,150,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(270,500,150,20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(440,500,150,20);
    surface3.shapeColor = "magenta";

    surface4 = createSprite(610,500,150,20);
    surface4.shapeColor = "red";


    box = createSprite(350,150,25,25);
    box.velocityY = 3;
    box.velocityX = 3;
    box.x = Math.round(random(20,750));
    box.shapeColor = "white";
    
    
    
    



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(box.isTouching(surface1)){
        box.shapeColor = "blue";
        box.bounceOff(surface1);
        music.play();
    }
    if(box.isTouching(surface2)){
        box.shapeColor = "orange";
        box.velocityX=0;
        box.velocityY = 0;
        music.stop();
    }
    if(box.isTouching(surface3)){
        box.shapeColor = "magenta";
        box.bounceOff(surface3);
        music.play();
    }

    if(box.isTouching(surface4)){
        box.shapeColor = "red";
        box.bounceOff(surface4);
        music.play();
    }
    

    edges = createEdgeSprites();
    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);
    box.bounceOff(edges[3]);

  drawSprites();

    //add condition to check if box touching surface and make it box
}
