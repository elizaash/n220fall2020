//Pre-Planning:
// 1. Make a pet- global x, y, amd height, width variables
// 2. Make it move back and forth with ARROW key change x,y variable- if, else 
    //use Midterm as ref
// 4. Make a FEED button to make the size grow- change hieght and width if, else
    // use lab 8.1 as ref
// 5. Make a COLOR change button that changes the color to brown


//Preload the images intp the program from my images folder

    function preload() {
        pet = loadImage('images/pet1.png');
        poo = loadImage('images/poo.png');
        tree = loadImage('images/tree.png');
        home = loadImage('images/home.png');
    }


//Set up the P5 canvas to place all visual elements on. It is important to add a background 
//color so that any shapes appear on the page.
    function setup() {
        createCanvas(700, 200)
    }

    let bgColor = '#87ceeb';

//Create global variables to be used to create objects and be manipulated with buttons connected to functions
    //Create variables for the pet
    let rectX = 200;
    let rectY = 100;
    boxSize = 40; 
    //Create variables to move the pet 
    let rectXSpeed = 0;
    let rectYSpeed = 0;
    //Create variables for the poo
    let pooX = 300;
    let pooY = 115;
    let pooSize = 1;
    //Create the background with a rect and a for loop determining how many trees there are and where they are 
    //on the x axis
    let grassColor = "#7cfc00";
    let treeX = [5, 250, 350];

//The draw function contains everything within 
    function draw(){

        background(bgColor);

//Create the house

        image(home, 100, 45, 90, 100);

        
//Create trees and space them using for loop and array

        for( var i = 0; i < treeX.length; i++){

            image(tree, treeX[i], 50, 100, 100);
        }


// Create the grass
        rect(0,130,width,100);
                   fill(grassColor);
                   noStroke();
                   
 //Create the pet and make it move using the right and left ARROW keys
            rectX = rectX + rectXSpeed;
            rectY = rectY + rectYSpeed;

            //pet screen bounce    
                    if (rectX > 0 ) {
                        rectXSpeed = 0;
                        }
            
                    if (rectX < 50) {
                        rectXSpeed = 0;
                        }   
                        
            
                    image(pet, rectX, rectY, boxSize, boxSize)


                    if(keyIsDown(LEFT_ARROW)) {
                        rectXSpeed = -1;
                    }
        
                    if(keyIsDown(RIGHT_ARROW)) {
                        rectXSpeed = 1;
                        
                    }


    //Make the pet wrap along the X axis when leaving the canvas
        if (rectX > width) {
            rectX = 0;
        }

        if (rectX < 0 ) {
            rectX = 500;
        }



    //Create the poo
         image( poo, pooX, pooY, pooSize, pooSize)    

     }
//Create the function that contains a for loop that will run when the "Grow" button is pressed
function feedMe() {
    boxSize = boxSize * 1.1;

    if (boxSize > 70) {
        boxSize = boxSize / 1.1;
        }
    }

//Create the function that will make the poo appear when Poo is clicked
function makePoo(){
    pooSize = 20;
    pooX = rectX;
}

//Create the function that will clear the poo off the screen
function cleanPoo(){
    pooSize = 1;
}

//Create the function that will make the bg color daytime
function makeDay(){
    bgColor = '#87ceeb';
    grassColor= "#7cfc00";
}

//Create the function that will make the bg color nightime
function makeNight(){
    bgColor = "#191970";
    grassColor= "#006400";
}

function goHome(){ 
    rectX = 122;

}




//Access the elements in the HTML file
let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");

//Save the pet's name based on used input and manipulation with DOM. Will show the name message when saved
function enterName() {
    let fullSentence = "Your pet is named" + " " + txtName.value;
    
    console.log(fullSentence);
    dvResult.innerHTML = fullSentence;

   txtName.value = "";

}


