
//Below is an object that contains the variables for the ball. Within the object, there is a 
//variable called "update" that holds a function that can be called outside of the object.
//To use the function in the code, you call it by writing "ball.update". The function creates 
// the circle (this.x, this.y, r) and will make the circle's x & y locations increase each frame
// by the velocity (velocityX,velocityY). This happens because with each page update the
//velocity is added to the current x,y coordinates creating the illusion of movement. 

    var ball = { 
        x: 100,
        y: 100,
        velocityX: 2,
        velocityY: 2,
        update: function() {
            noFill();
            stroke(255, 238, 130);
            circle(this.x, this.y, 10);
            this.x += this.velocityX;
            this.y += this.velocityY;
        }
    };

//This is the object for the paddle rect. Similar to the circle object above, this object 
//contains all of the variables needed to create the rect (x,y,w,h,update). The update
//variable in this object contains a function that creates the shape, and creates movement
// when pressing the left and right arrows. When pressing the left arrow key, the rectangle
// x placement starts moving -2 each frame. When pressing the right arrow key, the rectangle's
// x placement starts moving +2 each frame. To use the variables within the object, you use 
// "this._____".

    var paddle = {
        x: 100,
        y: 350,
        w: 150, 
        h: 20,
        update: function() {
            noFill();
            stroke(143, 251, 255);
            rect(this.x, this.y, this.w, this.h);
            
            if(keyIsDown(LEFT_ARROW)) {
                this.x -= 2;
                    }
            
            if(keyIsDown(RIGHT_ARROW)) {
                this.x += 2;
                }   
        }
    };
    
//This is an array creating the 6 blocks on top of the screen. 
    var blocks = [];

//This for loop works with the array above to create the 6 blocks spread 60 pixels apart 
// by multiplying i by 60 for x 6 times.     
    for(var i = 0; i < 6; i++) {
    blocks[i] = { x: i * 60, y: 10 };
    }

//This function creates the canvas that the objects are places on. The height is 400px and 
//the width is 400.
    function setup() {
        createCanvas(400, 400);
    }
  
//The draw function is where the fun happens. The "update" functions in the ball & paddle 
//objects are called within this draw function. Draw functions update once every second so you can create the 
//illusion of animation by changing some slightly each update.     
    function draw() {
        background(70);

//This line calls the ball object variable "update" which contains the function telling
//the ball to move.
        ball.update();

//This line calls the paddle object variable "update" which contains the function tell-
//ing the rect to move back and forth with the left and right arrow keys.
        paddle.update();

//This if statement creates the bounce of the ball when it hits the right wall of the canvas.
// In other words, when the x position of the circle is greater than 400 (width), then the 
// velocity is switched to -1 and makes the ball go left.         
        if(ball.x > 400) {
            ball.x = 400;
            ball.velocityX *= -1;
        }   
    
//This if statement creates the bounce of the ball when it hits the left wall of the canvas.
// In other words, when the x position of the circle is less than 0, then the 
// velocity is switched to -1 and makes the ball go right.               
        if(ball.x < 0) {
            ball.x = 0;
            ball.velocityX *= -1;
        }

//This if statement creates the bounce of the ball when it hits the "ceiling" of the canvas.
// In other words, when the y position of the circle is less than 0, then the 
// velocity is switched to -1 and makes the ball go down.                   
        if(ball.y < 0) {
            ball.y = 0;
            ball.velocityY *= -1;
        }
        
//This if statement makes the ball bounce off of the paddle when they come in contact with
//eachother. The hitTestPoint function contains parameters for the ball x, y coordinates and 
//paddle x, y, width, & height. When those arguments are filled, if the coordinate and 
//other parameters "collide" then the velocity switches to -1 and the circle bounces up off
//the rectangle

        if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
            ball.velocityY *= -1;
        }
//This for loop cycles through 6 times because blocks.length is used which refers to the amount
// of items in the "blocks" array created previously. The purpose of this section of code is to
//draw the rectangle blocks on the ceiling.
        for(var i = 0; i < blocks.length; i++) {
            var b = blocks[i];
            rect(b.x, b.y, 60, 20);

//This code bounces the circle off of th blocks when they collide.         
        if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
            ball.velocityY *= -1;
//remove block from array
        blocks.splice(i, 1);
            }
        }
        
    }
    
    function hitTestPoint(px, py, bx, by, bw, bh) {

//This is a nested or embedded if statement. The first statement validates if px > bx and px < bx + bw is true, and 
// then the second if statemt validates if py > by and py < by + bh is true, if both are true then the 
//if statement will return true. 
        if(px > bx && px < bx + bw) {
            if(py > by && py < by + bh) {
                return true;
            }
        }
    
        return false;
    }