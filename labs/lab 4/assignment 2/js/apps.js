//water dripping

function setup() {
    createCanvas(800, 600);
}

    let colors = ["#000000", "#FFFFFF","#000000", "#FFFFFF","#000000", "#FFFFFF",
    "#000000", "#FFFFFF","#000000", "#FFFFFF","#000000", "#FFFFFF",
    "#000000", "#FFFFFF","#000000", "#FFFFFF","#000000", "#FFFFFF", ]

    let xPos = 150;
    let yPos = 30;

    let xSpeed = 0;
    let ySpeed = .2;


    function draw(){
//key movements
            if(keyIsDown(LEFT_ARROW)) {
                xSpeed = -.5;
                fill(255,211,168)
            }

            if(keyIsDown(RIGHT_ARROW)) {
                xSpeed = .5;
                fill(255,255,255)
            }
            
            if(keyIsDown(DOWN_ARROW)) {
                ySpeed = .5;
                fill(151,72,51)
            }
            
            if(keyIsDown(UP_ARROW)) {
                ySpeed = -.5;
               fill(221,130,106);
            }
//bounce 
            if (xPos > 800) {
                xSpeed = -.5;
            }

            if (yPos > 600) {
                ySpeed = -.5;
            }
            if (xPos < 0) {
                xSpeed = .5;
            }

            if (yPos < 0) {
                ySpeed = .5;
            }
//push shift color change

        background(214,187,174);

        colors.push( yPos );

        colors.shift();


//circle positon 

        for ( var i = 0; i < colors.length; i ++){
            xPos = xPos + xSpeed;
            yPos = yPos + ySpeed;
            noStroke();
            circle(xPos*i+10, yPos-i*10, 20);

            fill(colors[i])

        }
            
//text
            fill(110,122,115);
            textSize(17);
            textFont('Georgia');    
            text('Personal Composition: Use Arrow Keys', 205, 35);


            
    }