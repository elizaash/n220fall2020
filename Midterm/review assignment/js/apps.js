function setup() {
    createCanvas(800, 600)
}

//variables
    let circleX = 350;
    let circleY = 275;

    let circleXSpeed = -3;
    let circleYSpeed = 3;

    let rectX = 750;
    let rectY = 0;
    rectW = 20;
    rectH = 150; 

    let rectXSpeed = 0;
    let rectYSpeed = 2;

    


//shapes

    function draw(){

        background('#309898');

        //circle
            circleX = circleX + circleXSpeed;
            circleY = circleY + circleYSpeed;
                noStroke();
                circle(circleX, circleY, 20);
                
            
                    
        //rectangle
            rectX = rectX + rectXSpeed;
            rectY = rectY + rectYSpeed;
                //rectangle sscreen bounce    
                    if (rectY > height-150 ) {
                        rectYSpeed = -2;
                        }
            
                    if (rectY < 0) {
                        rectYSpeed = 2;
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

        
        if (circleY > height) {
            circleYSpeed = -4;
            }
        if (circleX < 0) {
            circleXSpeed = 4;
            }

        if (circleY < 0) {
            circleYSpeed = 4;
            }

     //key movements
            if(keyIsDown(UP_ARROW)) {
                rectYSpeed = -5;
            }

            if(keyIsDown(DOWN_ARROW)) {
                rectYSpeed = 5;
                
            }


    //ball reappear
            if (circleX > width) {
            circleX = 400;
            circleY = 250;
            circleXSpeed = -4;

            }

            



    //text        
            textSize(25);
            fill(255,255,255);  
            textFont('Lucida Sans Unicode');
            text('PONGISH', 350, 250);
            textAlign(CENTER, CENTER) 
            
            // textSize(20);
            // fill(255,255,255); 
            // textFont('Georgia');
            // text('ball drop', 350, 300);
            // textAlign(CENTER, CENTER)  

            //circle(350,275,20);



        

                    
        console.log(collideRect());                  
     }

