let colors = ["#9b6c34", "#8a967c", "#cdb090", "#987658"];

let positions = [ 0, 0, 0, 0];


function setup() {

    createCanvas(400, 300)

}

    function draw() {

        background(colors[2]);

        positions.push(mouseX);
        positions.shift();


        for( var i = 0; i < positions.length; i ++) {
            fill( colors[3] );
            //noStroke();
            textFont('Georgia')            
            textSize(20);
            //circle( positions[i], 50, 20);
            text('ELIZA', positions[i], 150)

        }

        for( var i = 0; i < positions.length; i ++) {
            fill(colors[3]);
            //noStroke();
            textFont('Georgia')            
            textSize(20);
            //circle( positions[i], 50, 20);
            text('ASH', positions[i], 170)
    
        }

        for( var i = 0; i < positions.length; i ++) {
            fill(colors[3]);
            //noStroke();
            textFont('Georgia')            
            textSize(20);
            //circle( positions[i], 50, 20);
            text('VISUALS', positions[i], 190);

    
        }


 

    }
    

    


    
 
