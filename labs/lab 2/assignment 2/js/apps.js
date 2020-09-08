function setup() {
    createCanvas(400, 300)

    text('Counter in Console', 50, 50);
    textSize(60);
    fill(0,0,0);  
    textAlign(CENTER, CENTER);

}

 let x = 0;
 function draw(){
     x = x + 1 ;
    console.log(x);    

 }
