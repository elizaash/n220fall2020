// function setup() {
//     createCanvas(480, 120);
//    }
//    function draw() {
//     if (mouseIsPressed) {
//     fill(0);
//     } else {
//     fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
//    }


function setup() {
    createCanvas(480, 120);
    strokeWeight(4);
    stroke(0, 102);
   }
   function draw() {
    line(mouseX, mouseY, pmouseX, pmouseY);
   }