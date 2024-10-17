let btn1 = document.querySelector("#myButton");
let btn2 = document.querySelector("#myButton2");
let copyDev = document.querySelector(".copyCode");

let rgb1 = "#0004773";
let rgb2 = "#54d542";
const hexValues = () => {
  let myHexValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

let handleButton1 = () => {
  rgb1 = hexValues();
  console.log(rgb1);
  btn1.innerText = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDev.innerHTML = `background-image: linear-gradient(to right,  ${rgb1}, 
  ${rgb2})`;
};

let handleButton2 = () => {
  rgb2 = hexValues();
  console.log(rgb2);
  btn2.innerText = rgb2;

  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
  copyDev.innerHTML = `background-image: linear-gradient(to right,  ${rgb1}, ${rgb2})`;
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyDev.addEventListener("click", () => {
  navigator.clipboard.writeText(copyDev.innerText);
  console.log("This page says", alert("Content copied to clipboard"));
});
