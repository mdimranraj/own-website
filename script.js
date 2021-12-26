

setTimeout(imgChange,500);
function imgChange2(){
  document.getElementById("down-arrow").src="images/down-arrow.png";
  setTimeout(imgChange,500);
}
function imgChange(){
  document.getElementById("down-arrow").src="images/down-arrow-1.png";
  setTimeout(imgChange2,500);
}
