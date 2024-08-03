var processBar = document.querySelector(".process-bar");
var processEl = document.querySelector(".process-bar .process");
var circleEl = document.querySelector(".process-bar .process span");
var audio = document.querySelector("audio");
var playAction = document.querySelector(".player .play-action i");
var currentTimeEl = processBar.previousElementSibling;
var durationEl = processBar.nextElementSibling;

var processBarWidth = processBar.clientWidth;
var distance = 0;
var position = 0;
var offsetLeft = 0;
var timeCurrentBox;
var isDragging = false;

processBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDragging = true;
    var offsetX = e.offsetX;
    var rate = (offsetX / processBarWidth) * 100;
    processEl.style.width = `${rate}%`;
    distance = e.clientX;
    offsetLeft = offsetX;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDrop);
    removeTimeCurrentBox();
  }
});

circleEl.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDragging = true;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDrop);
    distance = e.clientX;
    offsetLeft = e.target.offsetLeft;
  }
});

circleEl.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

// xây dựng audio
audio.addEventListener("canplay", function () {
  durationEl.innerText = getTimeFormat(audio.duration);
});

playAction.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", function () {
  playAction.classList.replace("fa-play", "fa-pause");
});

audio.addEventListener("pause", function () {
  playAction.classList.replace("fa-pause", "fa-play");
});

audio.addEventListener("timeupdate", timeUpdate);

processBar.addEventListener("mousemove", createTimeCurrentBox);

function createTimeCurrentBox(e) {
  var rate = (e.offsetX / processBarWidth) * 100;
  var seconds = getTimeFormat((rate / 100) * audio.duration);

  if (!timeCurrentBox) {
    timeCurrentBox = document.createElement("span");
    timeCurrentBox.classList.add("time-box");
    processBar.appendChild(timeCurrentBox);
  }

  timeCurrentBox.innerText = `${seconds}`;
  timeCurrentBox.style.left = `${rate}%`;
}

processBar.addEventListener("mouseleave", removeTimeCurrentBox);

audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  processEl.style.width = "0%";
  currentTimeEl.innerText = getTimeFormat(0);
  playAction.classList.replace("fa-pause", "fa-play");
});

// các function
function handleDrop() {
  document.removeEventListener("mousemove", handleDrag);
  document.removeEventListener("mouseup", handleDrop);
  isDragging = false;
  var rate = parseFloat(processEl.style.width);
  var seconds = (rate / 100) * audio.duration;
  if (!isNaN(seconds) && seconds >= 0 && seconds <= audio.duration) {
    audio.currentTime = seconds;
  }
  removeTimeCurrentBox();
  audio.addEventListener("timeupdate", timeUpdate);
}

function handleDrag(e) {
  if (isDragging) {
    position = e.clientX;
    var spaceMove = position - distance;
    var rate = ((spaceMove + offsetLeft) / processBarWidth) * 100;
    rate = Math.min(100, Math.max(0, rate));
    processEl.style.width = `${rate}%`;
    audio.removeEventListener("timeupdate", timeUpdate);
  }
}

var getTimeFormat = function (second) {
  var mins = Math.floor(second / 60);
  second = Math.floor(second % 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    second < 10 ? "0" + second : second
  }`;
};

function timeUpdate() {
  if (!isDragging) {
    currentTimeEl.innerText = getTimeFormat(audio.currentTime);
    var rate = (audio.currentTime / audio.duration) * 100;
    processEl.style.width = `${rate}%`;
  }
}

function removeTimeCurrentBox() {
  if (timeCurrentBox) {
    processBar.removeChild(timeCurrentBox);
    timeCurrentBox = null;
  }
}
