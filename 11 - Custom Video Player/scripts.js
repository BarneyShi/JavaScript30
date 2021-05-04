const video = document.getElementsByTagName("video")[0];

const play = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const setProgressBar = () => {
  const progressBar = document.querySelector(".progress__filled");
  const currentProgress = video.currentTime;
  const length = video.duration;
  const percentage = currentProgress / length;
  progressBar.style.flexBasis = percentage * 100 + "%";
};
setInterval(setProgressBar, 500);

const forward = () => {
    video.currentTime = video.currentTime + 25;
}

const backward = () => {
    video.currentTime = video.currentTime - 10;
}

const changePlayRate = event => {
    video.playbackRate = parseFloat(event.target.value);
}

const changeVolume = event => {
    video.volume = parseFloat(event.target.value);
}