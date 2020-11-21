
var txtSentence = document.getElementById("txtSentence");
var txtOutput1 = document.getElementById("txtOutput1");
var txtOutput2 = document.getElementById("txtOutput2");



function breakString() {

    var inputString = txtSentence.value;
    var splitString = inputString.split(",");
    

    var sum = 0;

    for( var i = 0; i < splitString.length; i++) {
        var curGuess = parseInt(splitString[i]);
        sum = sum + curGuess;
        console.log(sum);
        var average = sum / splitString.length;
    }




    txtOutput1.innerHTML = "Sum : " + sum;
    txtOutput2.innerHTML = "Average : " + average;
    txtSentence.value = "";
}

