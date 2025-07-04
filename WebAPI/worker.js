let w;
const i = 0;

const startbtn = document.querySelector("#startbtn");

const stopbtn = document.querySelector("#stopbtn");

startbtn.addEventListener("click", () => {
  if (typeof(w) == "undefined") {
    w = new Worker("demoWorkers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
});

stopbtn.addEventListener("click", () => {
  w.terminate();
  w = undefined;
});