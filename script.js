let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let x = document.querySelector(".min");
let y = document.querySelector(".sec");
let z = document.querySelector(".msec");
function timeToStringmin(time) {
  let mins = Math.floor((time % 3600000) / 60000);
  return mins < 10 ? "0" + mins : mins;
}
function timeToStringsec(time) {
  let secs = Math.floor((time % 60000) / 1000);
  return secs < 10 ? "0" + secs : secs;
}
function timeToStringmilisec(time) {
  let millis = time % 1000;
  return millis < 100 ? (millis < 10 ? "00" + millis : "0" + millis) : millis;
}
let flag1 = 0;
function start() {
  console.log("hi");
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    x.textContent = timeToStringmin(elapsedTime);
    y.textContent = timeToStringsec(elapsedTime);
    z.textContent = timeToStringmilisec(elapsedTime);
  }, 10); // update every 10ms
  flag1++;
}

let flag = 0;
let og = timerInterval;

function stopResume() {
  if (flag1 > 0) {
    console.log(flag1);
    if (flag % 2 == 0) {
      document.querySelector("#swap").textContent = "resume";
      clearInterval(timerInterval);
    } else {
      timerInterval = og;
      document.querySelector("#swap").textContent = "stop";
      start();
    }
    flag++;
  }
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  x.textContent = "00";
  y.textContent = "00";
  z.textContent = "000";
  og = 0;
  flag = 0;
  document.querySelector("#swap").textContent = "stop";
}
