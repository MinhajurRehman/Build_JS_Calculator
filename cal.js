/** @format */

// Get Id's
const num_0 = document.querySelector("#btn0");
const num_1 = document.querySelector("#btn1");
const num_2 = document.querySelector("#btn2");
const num_3 = document.querySelector("#btn3");
const num_4 = document.querySelector("#btn4");
const num_5 = document.querySelector("#btn5");
const num_6 = document.querySelector("#btn6");
const num_7 = document.querySelector("#btn7");
const num_8 = document.querySelector("#btn8");
const num_9 = document.querySelector("#btn9");

// Get operators Id's
const addSign = document.querySelector("#btn-add");
const equaltoSign = document.querySelector("#btn-equal");
const Clear = document.querySelector("#btn-clear");
const Modulus = document.querySelector("#btn-modulus");
const Divide = document.querySelector("#btn-Divide");
const Multiply = document.querySelector("#btn-multiply");
const minus = document.querySelector("#btn-minus");
const dot = document.querySelector("#btn-dot");
const Delete = document.querySelector("#btn-del");
const bracket = document.querySelector("#btn-bracket");

// Display
const Display = document.querySelector("#display");

// event listener on any buttons
num_0.addEventListener("click", () => {
  Display.value += "0";
});

num_1.addEventListener("click", () => {
  Display.value += "1";
});

num_2.addEventListener("click", () => {
  Display.value += "2";
});

num_3.addEventListener("click", () => {
  Display.value += "3";
});

num_4.addEventListener("click", () => {
  Display.value += "4";
});

num_5.addEventListener("click", () => {
  Display.value += "5";
});

num_6.addEventListener("click", () => {
  Display.value += "6";
});

num_7.addEventListener("click", () => {
  Display.value += "7";
});

num_8.addEventListener("click", () => {
  Display.value += "8";
});

num_9.addEventListener("click", () => {
  Display.value += "9";
});

// operators event listener
addSign.addEventListener("click", () => {
  Display.value += "+";
});

// Eval means evalute every operators work
equaltoSign.addEventListener("click", () => {
  Display.value = eval(Display.value);
});

Clear.addEventListener("click", () => {
  Display.value = "";
});

Divide.addEventListener("click", () => {
  Display.value += "/";
});

// Delete character slice(start-Charater, end-Character)
Delete.addEventListener("click", () => {
  Display.value = Display.value.slice(0, -1);
});

Modulus.addEventListener("click", () => {
  Display.value += "%";
});

Multiply.addEventListener("click", () => {
  Display.value += "*";
});

minus.addEventListener("click", () => {
  Display.value += "-";
});

dot.addEventListener("click", () => {
  Display.value += ".";
});

bracket.addEventListener("click", () => {
  Display.value = "()";
});
