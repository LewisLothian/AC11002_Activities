document.getElementById("smallTip").addEventListener("click", smallTip);
document.getElementById("mediumTip").addEventListener("click", mediumTip);
document.getElementById("bigTip").addEventListener("click", bigTip);
document.getElementById("highestValue").addEventListener("click", heightetsTip);

var tipValue = 0;
document.getElementById("tipValue").innerHTML = tipValue;

function smallTip(){
  let billValue = document.getElementById("myInputBox").value;
  tipValue = billValue * 0.05;
  document.getElementById("tipValue").innerHTML = tipValue;
}

function mediumTip(){
  let billValue = document.getElementById("myInputBox").value;
  tipValue = billValue * 0.1;
  document.getElementById("tipValue").innerHTML = tipValue;
}

function bigTip(){
  let billValue = document.getElementById("myInputBox").value;
  tipValue = billValue * 0.25;
  document.getElementById("tipValue").innerHTML = tipValue;
}

function heightetsTip(){
  let billValue = document.getElementById("myInputBox").value;
  value1 = billValue * 0.25;
  value2 = 2 + (billValue * 0.1);
  if (value1 > value2){
    tipValue = value1;
  } else {
    tipValue = value2;
  }
  document.getElementById("tipValue").innerHTML = tipValue;
}
