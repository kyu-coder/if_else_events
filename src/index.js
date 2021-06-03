// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

function handleResize() {
  if (window.innerWidth > 1200) {
    body.className = "orange";
  } else if (window.innerWidth > 1000) {
    body.className = "green";
  } else if (window.innerWidth > 800) {
    body.className = "red";
  } else {
    body.className = "black";
  }
  console.log(window.innerWidth);
}

window.addEventListener("resize", handleResize);
