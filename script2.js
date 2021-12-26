
// var tab = document.querySelectorAll(".left-menu-item");
// tab.addEventListener("mouseover", function(event){
//   var s = new Audio("sounds/crash.mp3");
//   s.play();
// })
// alert("hello");
var audio = new Audio("sounds/crash.mp3");
const tab = document.querySelectorAll(".left-menu-item");
tab.addEventListener("mouseover", function(event){
audio.play();
});
