canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
var color="Red";
var width_of_line = 2;
var radius = 20;
var mouseEvent = "";

function my_mousedown(){
    color="Red";
    width_of_line = 2;
    radius = 20;
    mouseEvent = "Mouse Down";
}

canvas.addEventListener("mousemove",e=>{
    current_position_of_X=e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_Y=e.touches[0].clientY - canvas.offsetTop;

    if(mouseEvent == "Mouse Down"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_X, current_position_of_Y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
});