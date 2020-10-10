
//Animated Object

// var cx = 20;
// var cy = 30;
// var circleColor = [199, 137, 80];

//object 
var myCircle = { 
    r: 15,
    x: 20,
    y: 30,
    color: [199, 137, 80],
    speed:.2,
    update: function () {
        fill(this.color);
        this.x += this.speed;
        circle(this.x, this.y, this.r);
    }
}

function setup(){
    createCanvas(400,300);

}

function draw() {
    
    myCircle.update();
}

