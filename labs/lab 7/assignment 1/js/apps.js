let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");


function enterName() {
    let fullSentence = "Hello" + " " + txtName.value;
    
    console.log(fullSentence);
    dvResult.innerHTML = fullSentence;

   txtName.value = "";
}