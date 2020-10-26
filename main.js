const signUpButton = document.getElementById("overlayBtn");
const container = document.getElementById("container");
const overlay = document.getElementById("overlay-container");

// if (!container.classList.contains("right-panel-active")) {
//   signUpButton.addEventListener("click", () =>
//     container.classList.add("right-panel-active") 
//   );
// }

// if (container.classList.contains("right-panel-active")) {
//   signUpButton.addEventListener("click", () =>
//     container.classList.remove("right-panel-active")
//   );
// }

signUpButton.addEventListener("click", () => {
  if (!container.classList.contains("right-panel-active")) {
    container.classList.add("right-panel-active")
  }
  else if(container.classList.contains("right-panel-active")) {
    container.classList.remove("right-panel-active")
  }
 });