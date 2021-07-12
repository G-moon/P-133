img="";
status="";
function bedroomclick()
{
if(bedroomclick==true)
{
setpage(bedroompage)
}
}
function preload()
{
img=loadImage('th.jpg');
}
function setup()
{
canvas=createCanvas(600,500);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status detecting object";
}
function draw()
{
image(img,0,0,600,500);
fill("#2D628B");
text("Bed", 125,100);
noFill();
stroke("#E57824");
rect(90,50,300,400);
fill("#2D628B");
text("table1",320,120);
noFill();
stroke("#E57824");
rect(300, 90, 270,320);
fill("#2D628B");
text("Table2",250,400);
noFill();
stroke("#E57824");
rect(250, 375, 150, 220);
}
function modelLoaded()
{
console.log("modelLoaded");
status=true;
objectDetector.detect(img,gotResult);

}
function gotResult(error, results)
{
if(error)
{
console.log(error);
}
console.log(results);
}