let colors = [
     "#9b6c34", "#8a967c", "#cdb090", "#987658", 
    ]

let positions = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];


function setup () {
    createCanvas(400, 300);

   
}

function draw() {

    background(50);

    positions.push( mouseX );

    positions.shift();

    for( var i = 0; i < positions.length ; i ++){
        circle (positions[i], mouseY, 20 );
        
    }

    for( var i = 0; i < 4 ; i ++){
        fill ( colors[i] );
        noStroke();

    }


}