function setup() {
    createCanvas(400, 300)
}
//Create an application where if the circle is in the upper left, draw it in orange.
//lower left: purple
//lower right: green
//upper right: yellow

//ALSO: if the circle is on the right half, make it get smaller every frame
// and if the cricle on the left half, make it get bigger every frame

//Break the code up into its English Alogorithm
//Create comments (like these)
//Finally try to write the code

// If the x is greater than 200 and y is less than 150, then the fill is yellow.
// If the x is less than 200 and y is greater than 150, then the fill is purple.
// If the x is less than 200 and y is less than 150, then the fill is orange.
// If the x is greater than 200 and y is greater than 150, then the fill is green. 
// If the x is greater than 200 then the radius decreases by 1
// If the x is less than 200 then the radius increases by 1

let circleRadius = 40

let x = mouseX;

let y = mouseY;

function draw(){

    circle (mouseX, mouseY, circleRadius);

    if ((mouseX > 200) , (mouseY < 150)) {

        fill(255,255,0);
    }

    if ((mouseX < 200) , (mouseY > 150)) {

        fill(148,0,211);
    }
    if ((x < 200) , (mouseY < 150)) {

        fill(255,69,0);
    }
    if ((mouseX > 200) , (mouseY > 150)) {

        fill(50,205,50);
    }
    if (x > 200) {
        circleRadius + 1
    }
    else { 
        circleRadius - 1
    }

    
    }

    
    



