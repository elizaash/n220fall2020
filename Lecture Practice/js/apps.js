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

let txtDieSize = document.getElementById("txtDieSize");
let dvResult = document.getElementById("dvResult");


function rollDie() {
    let dieSize = Number(txtDieSize.value);
    let randRoll = 1 + Math.floor(Math.random() * dieSize);
    
    console.log(randRoll);
    dvResult.innerHTML = randRoll;

    txtDieSize.value = "";
}