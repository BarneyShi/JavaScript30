const play = () => {
  const video = document.getElementsByTagName("video")[0];
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

setInterval(setProgressBar, 500);