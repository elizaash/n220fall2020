function setup() {

    createCanvas(400, 300)
    background(215);
    //noFill();

    

}
function draw() {
    for ( var i = 30; i > 0; i--) {

        circle(200, 150, i * 10); 
    }

}


//code examples from lecture

    //var randColor = Math.random() * 255;
            //fill(randColor);
        
            //stroke(255 - (i * 15));

    /*let i = 0;
    while(i < 5)
    {
        console.log(i);
        i++;
        document.write(i);
    }

    console.log(i);
    */

