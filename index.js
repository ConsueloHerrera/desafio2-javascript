const image = document.getElementById("image");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const input3 = document.getElementById("input-3");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const selectValue1 = document.getElementById("select-1");
const selectValue2 = document.getElementById("select-2");
const selectValue3 = document.getElementById("select-3");

let imageHasBoder = false;
let isDisplayed = true;

image.addEventListener("click", () => {
  if (imageHasBoder) {
    imageHasBoder = false;
    image.style.borderStyle = "none";
  } else {
    imageHasBoder = true;
    image.style.borderColor = "red";
    image.style.borderWidth = "2px";
    image.style.borderStyle = "solid";
  }
});

btn1.addEventListener("click", () => {
  if (isDisplayed) {
    section1.style.display = "none";
    section2.style.display = "flex";
    isDisplayed = false;
  }
});

btn2.addEventListener("click", () => {
  section1.style.display = "flex";
  section2.style.display = "none";
  isDisplayed = true;
});
btn3.addEventListener("click", () => {
  section1.style.display = "none";
  section2.style.display = "none";
  section3.style.display = "flex";
  isDisplayed = true;
});

btn4.addEventListener("click", () => {
  section1.style.display = "none";
  section2.style.display = "flex";
  section3.style.display = "none";
  isDisplayed = true;
});

btn5.addEventListener("click", () => {
  total =
    parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);
  if (total <= 10) {
    text.innerHTML = "Llevas " + total + " stickers";
    text.style.color = "black";
  } else {
    text.innerHTML = "Llevas demasiados stickers";
    text.style.color = "red";
  }
});

btn6.addEventListener("click", () => {
  const total = selectValue1.value + selectValue2.value + selectValue3.value;
  console.log(total);

  if (total == 911) {
    text2.innerHTML = "Password 1 correcta";
    text2.style.color = "green";
  } else if (total == 714) {
    text2.innerHTML = "Password 2 correcta";
    text2.style.color = "green";
  } else {
    text2.innerHTML = "Password incorrecto";
    text2.style.color = "red";
  }
});
