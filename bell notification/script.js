const button = document.getElementById("_button");
const notify = document.getElementById("_notification");

button.addEventListener("click", () => {
  const counter = Number(notify.getAttribute("data-count")) || 0;
  notify.setAttribute("data-count", counter + 1);

  // Remove the 'count' class if it exists to restart the animation
  notify.classList.remove("count");
  void notify.offsetWidth; // Trigger reflow to restart the animation

  notify.classList.add("count");
});

notify.addEventListener("animationend", () => {
  // Remove the 'count' class after the animation ends
  notify.classList.remove("count");
});
