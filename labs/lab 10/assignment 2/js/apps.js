//___________________________________________________________________
// FUNCTIONS LECTURE 

    // let sunX = 40;

    // function setup() {
    //     createCansvas(400,300);
    //     background(100);

        
    // }

    // function draw(){
        
    //     background(100);
    //     sunX ++;
    //     drawSun("#00FF00", 15, mouseY, mouseX );
        
    // }

    // function drawSun(sunColor, numRays, yHeight, xHeight){

    //     fill(sunColor);
    //     stroke(sunColor);

    //     for(var i = 0; i < numRays; i++){
    //         line(xHeight, yHeight, i*20, 300);
            
    //         circle(xHeight, yHeight, 40);
    //     }
    // }


    // console.log("Hello outside");

    // function sayHello(){
    //     console.log("Hello inside");
    // }
    // sayHello();
//___________________________________________________________________

//OBJECTS LECTURE & MIDTERM

    //OBJECT 1 : TRAILING CIRCLE
    // var myCircle = { 
    //     r: 15,
    //     x: 20,
    //     y: 30,
    //     color: [199, 137, 80],
    //     speed:.2,
    //     update: function () {
    //         fill(this.color);
    //         this.x += this.speed;
    //         circle(this.x, this.y, this.r);
    //     }
    // }
    // function setup(){
    //     createCanvas(400,300);
    
    // }
    
    // function draw() {
        
    //     myCircle.update();
    // }

    //OBJECT 2 : DRIPPING WATER

    // var circles = [
    //     {x: 100, y: 20, r: 5},
    //     {x: 20, y: 50, r: 50},
    //     {x: 150, y: 200, r: 25},
    //     {x: 300, y: 250, r: 100},
    // ];

    // function setup(){
    //     createCanvas(400,300);
    //     noStroke();
    //     fill(200);
    // }

    // function draw() {
    //     for (var i = 0; i < circles.length; i++) {
    //         let currentCircle = circles[i];
    //         circle(currentCircle.x,currentCircle.y,currentCircle.r);
    //         //drip
    //         currentCircle.y += 2;

    //         if(currentCircle.y > 300) {
    //             currentCircle.y = 0;
    //             currentCircle.x = Math.random() * 400;
    //             fill(Math.random() * 255)
    //         }

    //     }  
       
    // }
//____________________________________________________________________________________

//INPUTS & INTERACTION

// let txtDieSize = document.getElementById("txtDieSize");
// let dvResult = document.getElementById("dvResult");


// function rollDie() {
//     let dieSize = Number(txtDieSize.value);
//     let randRoll = 1 + Math.floor(Math.random() * dieSize);
    
//     console.log(randRoll);
//     dvResult.innerHTML = randRoll;

//     txtDieSize.value = "";
// }
//___________________________________________________________________________________

// //DOM MANIPULATION & CSS
// let dvCoin = document.getElementById("coin"); 

// dvCoin.innerHTML = "tails";
// dvCoin.style.backgroundColor = "#ebcf34";
// dvCoin.style.width = "100px";
// dvCoin.style.height = "100px";

// function flipCoin() {

//     //do a coin flip
//     let flip = Math.random();
//     let side = "heads";
//     if(flip > .5) side = "tails";

//     //change background in innerHTML
//     dvCoin.innerHTML = side;

//     //chang bg color based on result
//     if(side == "tails") {
//         dvCoin.style.backgroundColor = "#eb5634";
//     } else { 
//         dvCoin.style.backgroundColor = "#ebcf34";
//     }

//     //record result in resuult list
//         //MAKE AN ELEMENT
//         let newEl = document.createElement("div");

//         //CUSTOMIZE
//         newEl.innerHTML = side;
//         newEl.style.backgroundColor = "#ebcf34";
//         newEl.style.width = "40px";
//         newEl.style.float = "left";
//         newEl.style.margin = "3px"

//         //PLACE OJECT ON PAGE
//         document.body.appendChild(newEl);   

// }

//________________________________________________________

//ARRAYS: SPLITTING STRINGS
// var txtSentence = document.getElementById("txtSentence");
// var txtOutput = document.getElementById("txtOutput")



// function breakString() {

//     var inputString = txtSentence.value;
//     var splitString = inputString.split(" ");

//     txtOutput.innerHTML = splitString[0];

// }

//_____________________________________________________
//ARRAYS SEARCHING ARRAYS 

// var guesses = [12, 7, 18, 5, 2 ];
// var foundFlag = false;

// for( var i = 0; i < guesses.length; i++) {
//     var curGuess = guesses[i];
//     console.log(curGuess);

//     if(curGuess == 5) {
//         foundFlag = true;
//         break; //stop looping
//     }
// }

//_____________________________________________________
//ARRAYS : CONDENSING 

// var guesses = [12, 7, 18, 5, 2 ];

// var sum = 0;


// for( var i = 0; i < guesses.length; i++) {
//     var curGuess = guesses[i];
//     sum = sum + curGuess;
    
//     //adds numbers tpgether each time it loops

// }

//_____________________________________________________
// //ARRAYS : COMPOUND DATA
// //array of objects
// var pizzas = [
//     { name: "Pep" , price: 12 },  
//     { name: "Cheese" , price: 9 },  
//     { name: "mush" , price: 11 },

//     { name: "supreme" , price: 19 },

// ]

// for( var i = 0; i < pizzas.length; i++) {
//     var curPizza = pizzas[i];

//     //make a new element for that pizza

//     var newEl = document.createElement("div");

//     //customize
//     newEl.innerHTML = curPizza.name + ": $" + curPizza.price;
//     newEl.backgroundColor = "FFFFFF";

//     //add to the page

//     document.body.appendChild(newEl);



// }


// //this is how you call something from the array of objects 
// console.log(pizzas[0].name);

// ___________________________________________________________________
// EVENTS 

let element = document.getElementById("squareOne");
element.addEventListener("click",itsClicked);
element.style.backgroundColor = "#808080";
element.style.width = "200px";
element.style.height = "200px";
element.style.float = "left";
element.style.margin = "5px";

function itsClicked(event) { 
    let response = event.target.getAttribute("data-response");
    event.target.style.backgroundColor = response;
    event.target.innerHTML = "Hooray!";

    console.log(response);

}

