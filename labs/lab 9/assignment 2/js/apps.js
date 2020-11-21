//connect HTML to JS
var txtSentence = document.getElementById("txtSentence");
var txtOutput1 = document.getElementById("txtOutput1");
var txtOutput2 = document.getElementById("txtOutput2");



function breakString() {
//split string into array by space
    var inputString = txtSentence.value;
    var splitString = inputString.split(" ");
    console.log = splitString;
    

    var foundFlag = false;
    var trueCount = 0
    console.log = foundFlag;
//find the bad words
    for( var i = 0; i < splitString.length; i++) {
        var curGuess = splitString[i];
        
    
        if((curGuess == "clear") || (curGuess == "water") || (curGuess == "tires")){
            foundFlag = true;
            break; //stop looping
            
        }

        // if((curGuess == "clear"){
            
            
        // }
       
    }

    if(foundFlag == true) { 
        txtOutput1.innerHTML = "Found";
        } else {
            txtOutput1.innerHTML = "Not Found";
        }

    if (foundFlag == true) {
        trueCount = trueCount + 1 ;
    }
    
    txtSentence.value = "";
    txtOutput2.innerHTML = trueCount + " " + "bad words found";
    
}

