function colorSwitch() {

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]')
}

let timerId = null;
let isActive = false;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#FF0000',
  '#00FF00',
  '#FF1493',
  '#FF4500',
  '#008B8B',
  '#FFFF00',
  '#FF00FF',
  '#0000FF',

];

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);

function onStart() {
  if(isActive) return;
  isActive = true;
  console.log('работает');
  timerId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
  }, 200);

}

function onStop() {
  isActive = false;
  clearInterval(timerId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
}
export default colorSwitch;
