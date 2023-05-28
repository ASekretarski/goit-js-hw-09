const page = document.querySelector("body");
const startButton = document.querySelector('button[data-start]')
const stopButton = document.querySelector('button[data-stop]')
stopButton.setAttribute("disabled","")
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function changeBackgroundColor() {
//     page.style.backgroundColor=getRandomHexColor()
// }

// function backgroundColorSelector() {
//     backgroundColor = setInterval(changeBackgroundColor, 1000);
// }

// function stopBackgroundColorSelector() {
//     clearInterval(backgroundColor);  
// }

function startButtonDisable() {
    startButton.setAttribute("disabled", "");
    stopButton.removeAttribute("disabled")
}

function stopButtonDisable() {
    startButton.removeAttribute("disabled");
    stopButton.setAttribute("disabled","")
}

startButton.addEventListener("click", () => {
    // backgroundColorSelector();
    startButtonDisable();
})

stopButton.addEventListener("click", () => {
    // stopBackgroundColorSelector();
    stopButtonDisable();
})



