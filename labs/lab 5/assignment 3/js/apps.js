function setup() {
    createCanvas(800, 600)
}

//variables
    let circleX = 0;
    let circleY = 40;

    let circleXSpeed = 5;
    let circleYSpeed = 5;

    let rectX = 0;
    let rectY = 550;
    rectW = 150;
    rectH = 20; 

    let rectXSpeed = 4;
    let rectYSpeed = 0;

    


//shapes

    function draw(){

        background('#8e9185');

        //circle
            circleX = circleX + circleXSpeed;
            circleY = circleY + circleYSpeed;
                noStroke();
                circle(circleX, circleY, 20);
                
            
                    
        //rectangle
            rectX = rectX + rectXSpeed;
            rectY = rectY + rectYSpeed;
                //rectangle wrap    
                    if (rectX > width-150 ) {
                        rectXSpeed = -5;
                        }
            
                    if (rectX < 0) {
                        rectXSpeed = 5;
                        }   
                        
                    rect(rectX, rectY, rectW, rectH);
        
//collison code

        function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

                        var colliding = false;
                
                        if(circleX > rectX && circleX < rectX + rectW) {
                
                            if(circleY > rectY && circleY < rectY + rectH) {
                
                                return true;
                
                            }
                
                    }
                
                    return colliding;
                
                    }    
                        result = collideRect(0, 40, 0, 550, 150, 20);   


    //bounce off rect

        if(collideRect(circleX, circleY, rectX, rectY, rectW, rectH)){
            circleXSpeed = -4;
            
            }
        
        if(collideRect(circleX, circleY, rectX, rectY, rectW, rectH)){
            circleYSpeed = -4;
            
            }

    //bounce off walls

        if (circleX > width) {
            circleXSpeed = -5;
            }

        if (circleY > height) {
            circleYSpeed = -5;
            }
        if (circleX < 0) {
            circleXSpeed = 5;
            }

        if (circleY < 0) {
            circleYSpeed = 5;
            }

     //key movements
            if(keyIsDown(LEFT_ARROW)) {
                rectXSpeed = -5;
                fill(255,211,168);
            }

            if(keyIsDown(RIGHT_ARROW)) {
                rectXSpeed = 5;
                fill(255,255,255);
            }

    //text        
            textSize(25);
            fill(255,255,255);  
            textFont('Georgia');
            text('PONG', 350, 250);
            textAlign(CENTER, CENTER) 
            
            textSize(20);
            fill(255,255,255);  
            textFont('Georgia');
            text('use <> arrows', 350, 280);
            textAlign(CENTER, CENTER)  

                    
        console.log(collideRect());                  
     }

