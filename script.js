let startTime, updatedTime, difference = 0, timerInterval;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function start() {
  if (!running) {
    startTime = new Date().getTime() - difference;
    timerInterval = setInterval(updateTime, 1000);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(timerInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  difference = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
}

function lap() {
  if (running) {
    const lapItem = document.createElement("li");
    lapItem.textContent = display.textContent;
    laps.appendChild(lapItem);
  }
}
