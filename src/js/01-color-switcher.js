const page = document.querySelector("body");
const startButton = document.querySelector('button[data-start]')
const stopButton = document.querySelector('button[data-stop]')
stopButton.setAttribute("disabled","")
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setBackgroundColor() {
    page.style.backgroundColor = getRandomHexColor()
}

startButton.addEventListener("click", () => {
    // colorChange = setInterval(() => {
    //     setBackgroundColor()
    // }, 1000);
    startButton.setAttribute("disabled", "");
    stopButton.removeAttribute("disabled")
})

stopButton.addEventListener("click", () => {
    // clearInterval(colorChange);
    stopButton.setAttribute("disabled", "");
    startButton.removeAttribute("disabled")
})

