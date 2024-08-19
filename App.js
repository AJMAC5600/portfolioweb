let mode = document.querySelector("nav");
let logo = document.querySelector(".logo");
let color = "light";
let body = document.querySelector(".section");
let mbody = document.querySelector(".all-contain");
let hire = document.querySelector(".hire__me");
let portFolio = document.querySelector(".portfolio");

logo.addEventListener("click", () => {
  if (color === "light") {
    color = "black";
    console.log(color);
    mode.style.background = "grey";
    body.style.background = "black";
  } else if (color === "black") {
    color = "light";
    mode.style.background = "#ffffff";
    console.log(color);
    body.style.background = " #faf5ff";
  }
});
hire.addEventListener("click", () => {
  window.location.href = "contact.html";
});
portFolio.addEventListener("click", () => {
  window.location.href = "resume.html";
});
