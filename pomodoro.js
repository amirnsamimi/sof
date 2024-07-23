const userData = {
  browserWidth: 0,
};

window.addEventListener("resize", () => {
  userData.browserWidth = document.body.offsetWidth;
});

let timerStatus = "pomodoro";
let second = 59;
let minute = 24;
let secInterval = null;
let minInterval = null;
let progressInterval = null;
let progressStep = 0;

const renderEl = document.querySelector("#render");
const pomodoroEl = document.querySelector("#pomodoro");
const shortEl = document.querySelector("#short");
const longEl = document.querySelector("#long");
const docInit = () => {
  renderEl.appendChild(pomodoroEl.content);
  let progressColor = `${
    timerStatus == "pomodoro"
      ? "linear-gradient(90deg, white 0,white 0px, rgb(148, 49, 49)  0)"
      : timerStatus == "short"
      ? "linear-gradient(90deg, white 0,white 0px, rgb(34, 77, 78)  0)"
      : "linear-gradient(90deg, white 0,white 0px, rgb(24, 55, 82)  0)"
  }`;
  console.log(progressColor, timerStatus);
  document.getElementById("progressBar").style.background = progressColor;
  document.getElementById("second").innerText = second;
  document.getElementById("minute").innerText = minute;
  userData.browserWidth = document.body.offsetWidth;
};

const inspector = () => {
  if (minute === 0 && second === 0 && timerStatus === "pomodoro") {
    render("short");
    timerStatus = "short";
    minute = 5;
    second = 59;
    document.getElementById("startBtn").innerHTML =
      "<button onClick='pauseTimer()'>PAUSE</button>";
  }
  if (minute === 0 && second === 0 && timerStatus === "short") {
    render("long");
    timerStatus = "long";
    document.querySelector("#startBtn").children[0].style.color =
    "cadetblue";
  }
  if (minute === 0 && second === 0 && timerStatus === "long") {
    render("pomodoro");
    timerStatus = "pomodoro";
    document.querySelector("#startBtn").children[0].style.color =
    "cadetblue";
  }
};

const render = (el) => {
  switch (el) {
    case "pomodoro":
      pauseTimer();
      minute = 24;
      timerStatus = "pomodoro";
      second = 59;
      document.getElementById(
        "progressBar"
      ).style.background = `linear-gradient(90deg, white 0,white 0px, rgb(148, 49, 49)  0)`;
      document.body.style.background = "rgb(186, 73, 73)";
      document.querySelector("#startBtn").children[0].style.color =
        "rgb(186, 73, 73)";
      docInit();
      break;
    case "short":
      pauseTimer();
      timerStatus = "short";
      minute = 4;
      second = 59;
      document.body.style.background = "cadetblue";
      document.querySelector("#startBtn").children[0].style.color =
      "cadetblue";
    
      document.getElementById(
        "progressBar"
      ).style.background = `linear-gradient(90deg, white 0,white 0px, rgb(34, 77, 78)  0)`;

      docInit();
      break;
    case "long":
      pauseTimer();
      timerStatus = "long";
      minute = 14;
      second = 59;
      document.body.style.background = "rgb(51, 80, 105)";
      document.querySelector("#startBtn").children[0].style.color =
        "rgb(51, 80, 105)";
      document.getElementById(
        "progressBar"
      ).style.background = `linear-gradient(90deg, white 0,white 0px, rgb(24, 55, 82)  0)`;
      docInit();
      break;
    default:
      break;
  }
};

const startTimer = () => {
  SecondInitializer();
  MinuteInitializer();
  ProgressBarInitializer();
  document.getElementById("startBtn").innerHTML =
    "<button onClick='pauseTimer()'>PAUSE</button>";
};

const pauseTimer = () => {
  clearInterval(secInterval);
  clearInterval(minInterval);
  clearInterval(progressInterval);
  document.getElementById("startBtn").innerHTML =
    "<button onClick='startTimer()'>START</button>";
};

let step = 0;
const total = minute * 60 + second;
const ProgressBarInitializer = () => {
  progressStep = userData.browserWidth / total;
  progressInterval = setInterval(() => {
    step++;
    document.getElementById(
      "progressBar"
    ).style.background = `linear-gradient(90deg, white 0,white ${
      progressStep * step
    }px, ${
      timerStatus === "pomodoro"
        ? "rgb(148, 49, 49)"
        : timerStatus === "short"
        ? "rgb(34, 77, 78)"
        : "rgb(24, 55, 82)"
    } 0)`;
  }, 1000);
};

const SecondInitializer = () => {
  secInterval = setInterval(() => {
    second === 0 ? (second = 59) : second--;
    document.querySelector("#second").innerText = second;
    inspector();
  }, 1000);
};

const MinuteInitializer = () => {
  minInterval = setInterval(() => {
    minute--;
    document.querySelector("#minute").innerText = minute;
    inspector();
  }, 60000);
};



// setting

const dropDown = (el) => {
    const dropDown = document.getElementById("dropdown")
    dropDown.style.top = "6rem"
       dropDown.style.opacity = "1"
}