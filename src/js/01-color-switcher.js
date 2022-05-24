const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let intervalId = null;

btnStart.addEventListener('click', onChengeColor);
btnStop.addEventListener('click', onStopChengeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChengeColor() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function onStopChengeColor() {
  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}
