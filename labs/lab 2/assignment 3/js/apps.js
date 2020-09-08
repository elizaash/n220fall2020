function setup() {
    createCanvas(800, 600)
}
    
//circle 1
    
    let xPos = 0;
    let yPos = 200;

    let xSpeed = 5;
    let ySpeed = 0;

    function draw(){
        background(214,187,174);
            xPos = xPos + xSpeed;
            yPos = yPos + ySpeed;
            noStroke();
              
    //key movements
            if(keyIsDown(LEFT_ARROW)) {
                xSpeed = -5;
                fill(255,211,168)
            }

            if(keyIsDown(RIGHT_ARROW)) {
                xSpeed = 5;
                fill(255,255,255)
            }
            
            if(keyIsDown(DOWN_ARROW)) {
                ySpeed = 5;
                fill(151,72,51)
            }
            
            if(keyIsDown(UP_ARROW)) {
                ySpeed = -5;
               fill(221,130,106);
            }
    //wrap 
            if (xPos > width) {
                xPos = 0;
            }
            if (yPos > height) {
                yPos = 0;
            }


            circle(xPos, yPos, 50);

    //words
            textSize(20);
            fill(255,255,255);  
            text('World Wrap', 350, 250);
            textAlign(CENTER, CENTER)
            
            }


            
