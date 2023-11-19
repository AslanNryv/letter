(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
    console.log('wat', card);
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  
  }());
  const video = document.getElementById("myVideo");
  const playPauseBtn = document.getElementById("play-pause-btn");
  const seekBar = document.getElementById("seek-bar");
  
  playPauseBtn.addEventListener("click", function () {
      if (video.paused) {
          video.play();
          playPauseBtn.innerHTML = "&#10074;&#10074;"; // Pause icon
      } else {
          video.pause();
          playPauseBtn.innerHTML = "&#9658;"; // Play icon
      }
  });
  
  seekBar.addEventListener("input", function () {
      const seekTime = video.duration * (seekBar.value / 100);
      video.currentTime = seekTime;
  });
  
  video.addEventListener("timeupdate", function () {
      const value = (video.currentTime / video.duration) * 100;
      seekBar.value = value;
  });  