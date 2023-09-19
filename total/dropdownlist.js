// Lấy giá trị của phần tử DOM
function domValue(e) {
  var dom = document.querySelector(e);
  return dom;
}

// DOM element
var selectValue = domValue("#members");

var submitButton = domValue("#submitBtn");
var ketqua = domValue("#result");

// Thêm sự kiện click cho nút submitButton
submitButton.addEventListener("click", process);

function process() {
  var selectOption = selectValue.value;
  var resultText = "";

  if (selectOption === "father") {
    resultText = "Bố";
  } else if (selectOption === "mother") {
    resultText = "Mẹ";
  } else if (selectOption === "brother") {
    resultText = "Em trai";
  } else if (selectOption === "sister") {
    resultText = "Em gái";
  } else if (selectOption === "selectA") {
    resultText = "Người lạ";
  }

  ketqua.textContent = resultText;
}
