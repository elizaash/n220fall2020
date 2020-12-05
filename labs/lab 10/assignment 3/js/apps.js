
let element = document.getElementById("squareOne");
element.addEventListener("click",itsClicked);
element.style.backgroundColor = "#d3d3d3";
element.style.width = "200px";
element.style.height = "100px";
// element.style.float = "left";
element.style.margin = "5px";
element.style.textAlign = "center";


let elementTwo = document.getElementById("squareTwo");
elementTwo.addEventListener("click",itsClicked);
elementTwo.style.backgroundColor = "#d3d3d3";
elementTwo.style.width = "200px";
elementTwo.style.height = "100px";
// elementTwo.style.float = "left";
elementTwo.style.margin = "5px";
elementTwo.style.textAlign = "center";


let elementThree = document.getElementById("squareThree");
elementThree.addEventListener("click",itsClicked);
elementThree.style.backgroundColor = "#d3d3d3 ";
elementThree.style.width = "200px";
elementThree.style.height = "100px";
// elementThree.style.float = "left";
elementThree.style.margin = "5px";
elementThree.style.textAlign = "center";

function itsClicked(event) { 
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = response;

    console.log(response);

}

