function setup() {
    createCanvas(800,600);

//text
    fill(110,122,115);
    textSize(17);
    textFont('Georgia');    
    text('E A R R I N G  D E S I G N', 205, 35);
    

//design 1
        var design1x = 200;
    
    // circle 1

        stroke(158,181,168);
        strokeWeight(5);
        noFill();
        circle(design1x,85,25);

        stroke(110,122,115);
        strokeWeight(5);
        noFill();
        circle(design1x,85,5);
        

    //circle 2

        stroke(206,218,217);
        strokeWeight(5);
        fill(158,181,168);
        circle(design1x,125,50);

        stroke(110,122,115);
        strokeWeight(5);
        fill(206,218,217);
        circle(design1x,125,25);

    //rainbow 1
        
        stroke(110,122,115);
        strokeWeight(5);
        noFill();
        arc(design1x,200, 100, 100, PI, PI + QUARTER_PI);
        arc(design1x,200, 100, 100, PI + QUARTER_PI, TWO_PI);

        stroke(206,218,217);
        strokeWeight(5);
        noFill();
        arc(design1x,200, 75, 75, PI, PI + QUARTER_PI);
        arc(design1x,200, 75, 75, PI + QUARTER_PI, TWO_PI);

        noStroke();
        fill(158,181,168);
        arc(design1x,200, 55, 55, PI, PI + QUARTER_PI);
        arc(design1x,200, 55, 55, PI + QUARTER_PI, TWO_PI)


    //rainbow 2
        noStroke();
        fill(110,122,115);
        arc(design1x,240, 75, 75, PI, PI + QUARTER_PI);
        arc(design1x,240, 75, 75, PI + QUARTER_PI, TWO_PI);

        noFill()
        stroke(255, 255, 255)
        strokeWeight(5)
        arc(design1x,240, 50, 50, PI, PI + QUARTER_PI);
        arc(design1x,240, 50, 50, PI + QUARTER_PI, TWO_PI);

        noFill()
        stroke(255, 255, 255)
        strokeWeight(5)
        arc(design1x,240, 25, 25, PI, PI + QUARTER_PI);
        arc(design1x,240, 25, 25, PI + QUARTER_PI, TWO_PI);

    // circle 3

        stroke(158,181,168);
        strokeWeight(5);
        noFill();
        circle(design1x,255,25);

        stroke(206,218,217);
        strokeWeight(5);
        noFill();
        circle(design1x,255,5);

//design 2
        var design2x = 400;
    // circle 1

        stroke(158,181,168);
        strokeWeight(5);
        noFill();
        circle(design2x,85,25);

        stroke(110,122,115);
        strokeWeight(5);
        noFill();
        circle(design2x,85,5);

        

    //circle 2

        stroke(206,218,217);
        strokeWeight(5);
        fill(158,181,168);
        circle(design2x,125,50);

        stroke(110,122,115);
        strokeWeight(5);
        fill(206,218,217);
        circle(design2x,125,25);

    //rainbow 1
        
        stroke(110,122,115);
        strokeWeight(5);
        noFill();
        arc(design2x,200, 100, 100, PI, PI + QUARTER_PI);
        arc(design2x,200, 100, 100, PI + QUARTER_PI, TWO_PI);

        stroke(206,218,217);
        strokeWeight(5);
        noFill();
        arc(design2x,200, 75, 75, PI, PI + QUARTER_PI);
        arc(design2x,200, 75, 75, PI + QUARTER_PI, TWO_PI);

        noStroke();
        fill(158,181,168);
        arc(design2x,200, 55, 55, PI, PI + QUARTER_PI);
        arc(design2x,200, 55, 55, PI + QUARTER_PI, TWO_PI)


    //rainbow 2
        noStroke();
        fill(110,122,115);
        arc(design2x,240, 75, 75, PI, PI + QUARTER_PI);
        arc(design2x,240, 75, 75, PI + QUARTER_PI, TWO_PI);

        noFill()
        stroke(255, 255, 255)
        strokeWeight(5)
        arc(design2x,240, 50, 50, PI, PI + QUARTER_PI);
        arc(design2x,240, 50, 50, PI + QUARTER_PI, TWO_PI);

        noFill()
        stroke(255, 255, 255)
        strokeWeight(5)
        arc(design2x,240, 25, 25, PI, PI + QUARTER_PI);
        arc(design2x,240, 25, 25, PI + QUARTER_PI, TWO_PI);

    // circle 3
    
        stroke(158,181,168);
        strokeWeight(5);
        noFill();
        circle(design2x,255,25);

        stroke(206,218,217);
        strokeWeight(5);
        noFill();
        circle(design2x,255,5);



    }