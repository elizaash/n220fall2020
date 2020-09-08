function setup() {
    createCanvas(800, 600)
}
    
//circle 1
    
    let xPos = 0;
    let yPos = 40;

    let xSpeed = 5;
    let ySpeed = 5;

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
    //bounce 
            if (xPos > width) {
                xSpeed = -5;
            }

            if (yPos > height) {
                ySpeed = -5;
            }
            if (xPos < 0) {
                xSpeed = 5;
            }

            if (yPos < 0) {
                ySpeed = 5;
            }


            circle(xPos, yPos, 20);
            }

//words
fill(110,122,115);
textSize(17);
textFont('Georgia');    
text('E A R R I N G  D E S I G N', 205, 35);