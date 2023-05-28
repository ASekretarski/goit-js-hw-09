import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const dateInput = document.querySelector("#datetime-picker")
const startButton = document.querySelector("button[data-start]")
const dayCount = document.querySelector('.value[data-days]')
const hourCount = document.querySelector('.value[data-hours]')
const minuteCount = document.querySelector('.value[data-minutes]')
const secondCount = document.querySelector('.value[data-seconds]')
let chosenDateTimestamp = null;

function convertMs(ms) {
// Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

// Remaining days
  const days = Math.floor(ms / day);
// Remaining hours
  const hours = Math.floor((ms % day) / hour);
// Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function disableButton() {
    startButton.setAttribute("disabled","")
}

function ableButton() {
    startButton.removeAttribute("disabled")
}

function wrongDateAlert() {
    window.alert("Please choose a date in the future")
}

function addLeadingZero(value) {
    let text = value.toString();
    text = text.padStart(2, "0");
    return text
}



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        chosenDateTimestamp = selectedDates[0].getTime();
        const date = new Date();
        if (chosenDateTimestamp <= date.getTime()) {
            disableButton();
            wrongDateAlert()
        } else {
            ableButton()
        }
  },
};

flatpickr("#datetime-picker", options)

function countdown() {
    const date = new Date();
    const timeLeft = chosenDateTimestamp - date.getTime()
    if (timeLeft > 0) {
        dayCount.textContent=addLeadingZero(convertMs(timeLeft).days)
        hourCount.textContent=addLeadingZero(convertMs(timeLeft).hours)
        minuteCount.textContent=addLeadingZero(convertMs(timeLeft).minutes)
        secondCount.textContent=addLeadingZero(convertMs(timeLeft).seconds)
    }
}

function startCountdown() {
    setInterval(countdown, 1000)
}

startButton.addEventListener("click", startCountdown)

