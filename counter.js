let timer = 10;
const timeHandler = () => {
    document.getElementById("startBtn").style.display = "none"
  setInterval(() => {
    if (timer === 0) {
      alert("Booooooom");
      timer--;
    } else if (timer > 0) {
      timer--;
      document.getElementById("result").innerText = timer;
    }
  }, 1000);
};
