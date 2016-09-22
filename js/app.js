//When clicking on the color picking list items
  //deselect all li's that are selected
  //select the one which was clicked
var color = $(" .selected").css("backgroud-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
$(".controls").on("click", "li", function(){
$(this).siblings().removeClass("selected");
//When "New Color" button is pressed
$(this).addClass("selected");
  color = $(this).css("background-color");

    });

  //hide/show the color select div

//When color sliders changes
$("#revealColorSelect").click(function(){
  changecolor();
  $("#colorSelect").toggle();
});
function changecolor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

   $("#newColor").css("background-color", "rgb(" +r+ ", " +g+ ", " +b+ ")");

}
$("input[type=range]").change(changecolor);
$("#addNewColor").on("click",  function(){

  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor)
  $newColor.click();
});
$canvas.mousedown(function(event) {

  lastEvent = event;
mouseDown = true;

}).mousemove(function(event){

  if(mouseDown==true){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(event.offsetX, event.offsetY);
   context.strokeStyle = color;
   context.stroke();
lastEvent = event;
}

}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function() {
$canvas.mouseup();
});




//OR when the previous event fires
  //update the new color span

//When add color is pressed
  //append the new color to the controls ul
  //select the new color

//on mouse events on the canvas
  //draw lines
