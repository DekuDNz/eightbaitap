// function dom
function domValue(item) {
  var dom = document.querySelector(item);
  return dom;
}

var firstNumberE = domValue("#firstnumber");
var secondNumberE = domValue("#secondnumber");
var thirdNumberE = domValue("#thirdnumber");
var submitBtn = domValue("#submitBtn");
var result = domValue("#result");

submitBtn.addEventListener("click", runresult);

function runresult() {
  var so1 = Number(firstNumberE.value);
  var so2 = Number(secondNumberE.value);
  var so3 = Number(thirdNumberE.value);
  var arr = [so1, so2, so3];
  if (so1 && so2 && so3) {
    arr.sort((a, b) => {
      return a - b;
    });

    result.textContent = arr;
  } else {
    alert("xin vui long nhap");
  }
}
