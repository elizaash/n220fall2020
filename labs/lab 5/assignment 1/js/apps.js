//stoplight

//array
let colors = ["#FF0000","#FFFF00", "#008000"];

function setup() {
    createCanvas(400, 300);

    //rectangle 1
    noStroke();
    fill(255, 216, 0);
    rectMode(CENTER);
    rect( 150, 200, 50, 150);
    
    

    //circle
    for( var i = 0; i < colors.length; i++){
        fill( colors[i] );
        noStroke();
        circle( 150, 150 + (50*i), 40 );
    }


    }
    