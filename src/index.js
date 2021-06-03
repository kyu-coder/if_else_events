// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

function handleResize() {
  if (window.innerWidth > 1200) {
    body.style.backgroundColor = "orange";
  } else if (window.innerWidth > 1000) {
    body.style.backgroundColor = "green";
  } else if (window.innerWidth > 800) {
    body.style.backgroundColor = "red";
  } else {
    body.style.backgroundColor = "black";
  }
  console.log(window.innerWidth);
}

window.addEventListener("resize", handleResize);
