import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formInput = document.querySelector('.form');

formInput.addEventListener('submit', onNewPromise);

function onNewPromise(evt) {
  evt.preventDefault();
  let stepInput = Number(evt.currentTarget.step.value);
  let delayInput = Number(evt.currentTarget.delay.value);
  let amountInput = Number(evt.currentTarget.amount.value);

  for (let i = 1; i <= amountInput; i += 1) {
    createPromise(i, delayInput)
      .then(success => console.log(`✅ Fulfilled promise`))
      .catch(error => console.log(`❌ Rejected promise`));
    delayInput += stepInput;
  }
}

function createPromise(position, delayInput) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delayInput}ms`));
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delayInput}ms`));
      }
    }, delayInput);
  });
}
