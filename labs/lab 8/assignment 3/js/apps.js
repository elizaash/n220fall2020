//define div 
let dvBox = document.getElementById("box");
let h1Txt = document.getElementById("header"); 
let pTxt = document.getElementById("p"); 


//set variable for width and height
let boxSize = 50;

//random color - could change to for loop/array
let randNumber1 = Math.floor(Math.random() * 999999);
let randNumber2 = Math.floor(Math.random() * 333998);
let randNumber3 = Math.floor(Math.random() * 444444);

//changeColorOver
function changeColorOver() {
    dvBox.style.backgroundColor = "#" + randNumber1;
    
    }

//changeColorOut
function changeColorOut() {
    dvBox.style.backgroundColor = "#" + randNumber2;

    }

function increaseSize() {

    //increase the size on click
    
    boxSize = boxSize * 1.1;
    dvBox.style.width = boxSize + "px";
    dvBox.style.height = boxSize + "px";
    
    }



//box width & height
dvBox.style.width = boxSize + "px";
dvBox.style.height = boxSize + "px";
dvBox.style.backgroundColor = "#" + randNumber3;
dvBox.style.margin = "10px";
dvBox.style.float = "left";
pTxt.style.margin = "10px";

//change inner html
h1Txt.innerHTML = "Secret Message Hidden in HTML"

