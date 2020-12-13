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
        food = loadImage('images/food.png');
        shop = loadImage('images/shop.png');
        friend1 = loadImage('images/pet2.png');
        friend2 = loadImage('images/pet3.png');
        shop2 = loadImage('images/shop2.png');
        shop3 = loadImage('images/shop3.png');
        shop4 = loadImage('images/shop4.png');

    }



//Set up the P5 canvas to place all visual elements on. It is important to add a background 
//color so that any shapes appear on the page.
    function setup() {
        createCanvas(windowWidth - 20, 200);
        
    }

    let bgColor = '#87ceeb';

//Create global variables to be used to create objects and be manipulated with buttons connected to functions
    //Create variables for the pet
    let petX = 200;
    let petY = 100;
    petSize = 40; 

    //Create variables to move the pet 
    let petXSpeed = 0;
    let petYSpeed = 0;

    //Create variables for the poo
    let pooX = 300;
    let pooY = 115;
    let pooSize = 1;

    //Create food 
    let foodX = 300;
    let foodY = 115
    let foodSize = 1;


    //Create the background with a rect and an array looping with a for loop to determine how many trees there are and where they are 
    //on the x axis
    let grassColor = "#7cfc00";
    let treeX = [5, 250, 350, 500, 640, 1200];

    
 //BACKGROUND   

    //The draw function contains everything within 
        function draw(){
            background(bgColor);

    
            
    //Create trees and space them using for loop and array

            for( var i = 0; i < treeX.length; i++){

                image(tree, treeX[i], 50, 100, 100);
            }

    //Create the house

            image(home, 100, 45, 90, 100);


    //Create the shops object and print using for loop

    let town = [
        {title: shop, X: 800, Y: 45, size: 90},
        {title: shop2, X: 900, Y: 45, size: 90},
        {title: shop3, X: 1000, Y: 45, size: 90},
        {title: shop4, X: 1100, Y: 45, size: 90},
    
    ]

    for( var i = 0; i < town.length; i++){

        image( town[i].title, town[i].X, town[i].Y, town[i].size, town[i].size);
    }



    // Create the grass
            rect(0,130,width,100);
                    fill(grassColor);
                    noStroke();

    //Create the friends

            image( friend1, 900, 150, 40, 40 )   
            image(friend2, 1000, 140, 40, 40 )     
        
                   
 //Create the pet and make it move using the right and left ARROW keys
            petX = petX + petXSpeed;
            petY = petY + petYSpeed;

            //pet screen bounce    
                    if (petX > 0 ) {
                        petXSpeed = 0;
                        }
            
                    if (petX < 50) {
                        petXSpeed = 0;
                        }   

                    if (petY < 0 ) {
                        petYSpeed = 0;
                        }
            
                    if (petY > 100) {
                        petYSpeed = 0;
                        }   

                    if (petY < 90) {
                            petYSpeed = 1;
                            }   
                        
                        
            
                    image(pet, petX, petY, petSize, petSize)

//Key pet movements 
                    if(keyIsDown(LEFT_ARROW)) {
                        petXSpeed = -2;
                    }
        
                    if(keyIsDown(RIGHT_ARROW)) {
                        petXSpeed = 2;
                        
                    }
                    if(keyIsDown(UP_ARROW)) {
                        petYSpeed = -2;
                    }
                    if(keyIsDown(DOWN_ARROW)) {
                        petYSpeed = 2;
                    }


    //Make the pet wrap along the X axis when leaving the canvas
        if (petX > windowWidth-20) {
            petX = 0;
        }

        if (petX < 0 ) {
            petX = 500;
        }


    //Create the poo
         image( poo, pooX, pooY, pooSize, pooSize)    
  
    //Create the food
        image( food, foodX, foodY, foodSize, foodSize)    

}

 
//Create the function that contains a for loop that will run when the "Grow" button is pressed
function growMe() {
    petSize = petSize * 1.1;

    if (petSize > 70) {
        petSize = petSize / 1.1;
        }
    }

//Create the function that will make the poo appear when Poo is clicked
function makePoo(){
    pooSize = 20;
    pooX = petX - 20;
    pooY = petY + 20;
}

//Create the function that will clear the poo off the screen
function cleanPoo(){
    pooSize = 1;
    foodSize = 1;
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


//Send the pet back to house
function goHome(){ 
    petX = 122;
    petY = 100

}

//Send the pet to town
function goShop(){ 
    petX = 950;
    petY = 150

}

function feedMe(){
    foodSize = 30;
    foodX = petX + 50;
    foodY = petY + 20;

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


