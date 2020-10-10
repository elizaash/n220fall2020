function setup() {
    createCanvas(800, 600)
}

//object
    var myCircle = {
    
     xPos : 0,
     yPos : 40,

     xSpeed : 5,
     ySpeed : 5,

     color : "#ad8456",

    update: function (){
        background(152,72,43);
            this.xPos = this.xPos + this.xSpeed;
            this.yPos = this.yPos + this.ySpeed;
            noStroke();
            fill(this.color);
            circle(this.xPos, this.yPos, 20); }

    }

function draw() {
    
    myCircle.update();

//key movements
    if(keyIsDown(LEFT_ARROW)) {
        myCircle.xSpeed = -5;
        fill(255,211,168)
    }

    if(keyIsDown(RIGHT_ARROW)) {
        myCircle.xSpeed = 5;
        fill(255,255,255)
    }
    
    if(keyIsDown(DOWN_ARROW)) {
        myCircle.ySpeed = 5;
        fill(151,72,51)
    }
    
    if(keyIsDown(UP_ARROW)) {
        myCircle.ySpeed = -5;
       fill(221,130,106);
    }

//bounce 
    if (myCircle.xPos > width) {
        myCircle.xSpeed = -5;
    }

    if (myCircle.yPos > height) {
        myCircle.ySpeed = -5;
    }
    if (myCircle.xPos < 0) {
        myCircle.xSpeed = 5;
    }

    if (myCircle.yPos < 0) {
        myCircle.ySpeed = 5;
    }

}

