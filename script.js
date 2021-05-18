const musicPlayer = document.querySelector(".musicPlayer");
const playButton = document.querySelector(".playButton");
const stopButton = document.querySelector(".stopButton");
const audio = document.querySelector(".audio");
const progress = document.querySelector(".progress");

playButton.addEventListener("click", () => {
  audio.play();
  stopButton.classList.remove("hidden");
  playButton.classList.add("hidden");

});

stopButton.addEventListener("click", () => {
  audio.pause();
  playButton.classList.remove("hidden");
  stopButton.classList.add("hidden");
});

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

audio.addEventListener("timeupdate", updateProgress);