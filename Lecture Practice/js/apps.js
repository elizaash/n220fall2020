
let sunX = 40;

function setup() {
    createCansvas(400,300);
    background(100);

    
}

function draw(){
    
    background(100);
    sunX ++;
    drawSun("#00FF00", 15, mouseY, mouseX );
    
}

function drawSun(sunColor, numRays, yHeight, xHeight){

    fill(sunColor);
    stroke(sunColor);

    for(var i = 0; i < numRays; i++){
        line(xHeight, yHeight, i*20, 300);
        
        circle(xHeight, yHeight, 40);
    }
}


console.log("Hello outside");

function sayHello(){
    console.log("Hello inside");
}
sayHello();