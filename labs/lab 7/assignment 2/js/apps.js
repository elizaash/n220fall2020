
let txtDieSize = document.getElementById("txtDieSize");
let dvResult = document.getElementById("dvResult");


function calculateTipTotal() {
    let mealCost = Number(txtMealCost.value);
    let tip = mealCost * .20;
    let total = tip + mealCost;
    
    console.log("Tip: $" + tip + "." + "Total: $" + total + ".");
    dvResult.innerHTML = "Tip =$" + tip;
    dvResultTwo.innerHTML = "Total =$" + total;

    txtMealCost.value = "";
}