import Notiflix from 'notiflix';
Notiflix.Notify.init({ useIcon: false });
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      } else {
        reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
      }
    }, delay)
  })
}

const form = document.querySelector('.form');
const firstDelayInput = document.querySelector('input[name="delay"]')
const delayStepInput = document.querySelector('input[name="step"]')
const amountInput = document.querySelector('input[name="amount"]')

function formHandler(event) {
  event.preventDefault();
  for (let i = 0; i < amountInput.value; i ++){
    const delay = Number(firstDelayInput.value) + (i * delayStepInput.value);
    const position = i + 1;
    createPromise(position, delay)
  }
}

form.addEventListener("submit", formHandler)
