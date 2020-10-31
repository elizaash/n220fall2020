
let txtUsername = document.getElementById("txtUsername");
let dvResult = document.getElementById("dvResult");
let dvResultTwo = document.getElementById("dvResultTwo");


function logIn() {

    
    if( (txtUsername.value == "Username") && (txtPassword.value == "Password") ) {

        dvResult.innerHTML = "Success";}

        else { dvResult.innerHTML = "Wrong Information"; }

        txtUsername.value = "";
        txtPassword.value = "";
        //dvResult.innerHTML = "";

    }

    console.log();
    
    

    
