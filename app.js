// Four states. The lamp starts off.
const modes = ["Off", "Low", "Medium", "High"];
let level = 0;
let touchCount = 0;
const touch = document.getElementById("touch");

function touchControl() {
  level = (level + 1) % modes.length;
  touchCount += 1;
  const isOn = level > 0;
  return { level, mode: modes[level], isOn, touchCount };
}
function render() {
  const isOn = level > 0; // Derived, never independently changed.
  const nextLevel = (level + 1) % modes.length;
  document.getElementById("scene").dataset.level = level;
  document.getElementById("mode").textContent = modes[level];
  document.getElementById("number").textContent = "0" + level;
  document.getElementById("level").textContent = level;
  document.getElementById("isOn").textContent = isOn;
  document.getElementById("count").textContent = touchCount;
  document.getElementById("description").textContent = [
    "The lamp is off. Touch the control to begin.",
    "The first brightness level. Touch again for medium.",
    "The second brightness level. Touch again for high.",
    "The highest brightness level. The next touch turns it off."
  ][level];
  const calculation = "(" + level + " + 1) % 4 = " + nextLevel;
  document.getElementById("equation").textContent = "Next: " + calculation;
  document.getElementById("math").textContent = calculation + " → " + modes[nextLevel];
  document.querySelectorAll("[data-state]").forEach(el => el.classList.toggle("active", Number(el.dataset.state) === level));
  document.querySelectorAll(".meter i").forEach((el, i) => el.classList.toggle("lit", i < level));
  touch.setAttribute("aria-label", "Lamp is " + modes[level] + ". Touch to change to " + modes[nextLevel] + ".");
}
// One event listener supports touch, mouse and keyboard.
touch.addEventListener("click", () => { touchControl(); render(); });
touch.addEventListener("keydown", event => {
  if (event.repeat && (event.key === "Enter" || event.key === " ")) event.preventDefault();
});
document.getElementById("reset").addEventListener("click", () => {
  level = 0; touchCount = 0; render();
});
document.getElementById("copy").addEventListener("click", async event => {
  try {
    await navigator.clipboard.writeText(document.getElementById("code-content").textContent);
    event.target.textContent = "Copied!";
  } catch { event.target.textContent = "Select code to copy"; }
});
render();

