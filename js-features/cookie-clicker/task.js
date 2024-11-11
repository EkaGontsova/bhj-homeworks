let clickCounter = 0;
const counterElement = document.getElementById("clicker__counter");
const cookieElement = document.getElementById("cookie");

cookieElement.onclick = function () {
  clickCounter++;
  counterElement.textContent = clickCounter;

  if (clickCounter % 2 === 0) {
    cookieElement.style.width = "220px";
  } else {
    cookieElement.style.width = "200px";
  }
};
