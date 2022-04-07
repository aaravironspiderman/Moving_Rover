CANVAS = document.getElementById("myCanvas");

ctx = CANVAS.getContext('2d');

rover_img ="rover.png"
background_img="mars.jpg";

rover_X = 10;
rover_Y = 10;

rover_width=100;
rover_height=90;

function add()
{
  
     background_tag = new Image();
     background_tag.onload = upload_background;
     background_tag.src =  background_img;



     rover_tag = new Image();
     rover_tag.onload = upload_rover;
     rover_tag.src = rover_img;
}

//Syntax -- > ctx.drawImage(image_tag,x,y, width,height);

function upload_background(){

    ctx.drawImage(background_tag,0,0,CANVAS.width, CANVAS.height);

}

function upload_rover(){
    ctx.drawImage(rover_tag,rover_X,rover_Y,rover_width, rover_height);
}


window.addEventListener("keydown",my_key_pressed);

function my_key_pressed(e){

    keydown_Code = e.keyCode;
    console.log(keydown_Code);

    if (keydown_Code == "38"){
        
        up();
        console.log("UP");
    }

    if (keydown_Code == "39"){
        
        right();
        console.log("RIGHT");
    }

    if (keydown_Code == "40"){
        
        down();
        console.log("DOWN");
    }
    
    if (keydown_Code == "37"){
        
        left();
        console.log("LEFT");
    }



}

function up(){

    if (rover_Y >=0){

        rover_Y = rover_Y - 10;
        upload_background();
        upload_rover();

    }

}


function down(){

    if (rover_Y <= 500){

        rover_Y = rover_Y + 10;
        upload_background();
        upload_rover();
        
    }

}


function left(){

    if (rover_X >=0){

        rover_X = rover_X - 10;
        upload_background();
        upload_rover();
        
    }

}


function right(){

    if (rover_X <= 690){

        rover_X = rover_X + 10;
        upload_background();
        upload_rover();
        
    }

}


