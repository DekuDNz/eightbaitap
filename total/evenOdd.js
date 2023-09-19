// function dom
function domValue(item) {
  var dom = document.querySelector(item);
  return dom;
}

var firstNumberE = domValue("#firstnumber");
var secondNumberE = domValue("#secondnumber");
var thirdNumberE = domValue("#thirdnumber");
var submitBtn = domValue("#submitBtn");
var result1 = domValue("#result1");
var result2 = domValue("#result2");

submitBtn.addEventListener("click", runresult);

function runresult() {
  var firstNumber = Number(firstNumberE.value);
  var secondNumber = Number(secondNumberE.value);
  var thirdNumber = Number(thirdNumberE.value);

  if (firstNumber && secondNumber && thirdNumber) {
    var demchan = 0;
    if (firstNumber % 2 === 0) {
      demchan++;
    } else if (secondNumber % 2 === 0) {
      demchan++;
    } else if (thirdNumber % 2 === 0) {
      demchan++;
    }
    var demle = 3 - demchan;

    result1.textContent = demchan;
    result2.textContent = demle;
  } else {
    alert("xin vui lòng nhập");
  }
}
