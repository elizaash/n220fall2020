function setup() {

    createCanvas(800, 600)
    background(215);
    //noFill();


}
function draw() {
    for ( var i = 25; i > 0; i--) {
        fill(0);
        circle(i * 20, 150, 15); 

        if (i % 3 == 0 ) { 
            
            fill(153,50,204);
            circle(i * 20, 150, 15);
    
        }

        if ( i % 5 == 0 ) { 
            
            fill(34,139,34);
            rect (i * 20, 150, 10);
        }

        if ((i % 5 == 0) && (i % 3 == 0 )) { 
            
            fill(0, 0, 255);
            rect (i * 20, 150, 10);
            rectMode(RADIUS);

        }

    
}


//code examples from lecture

    //var randColor = Math.random() * 255;
            //fill(randColor);
        
            //stroke(255 - (i * 15));

    /*let i = 0;
    while(i < 5)
    {
        console.log(i);
        i++;
        document.write(i);
    }

    console.log(i);
    */
}
