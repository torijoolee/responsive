(() => {
  const visualSlide = document.querySelectorAll(".visual-slide");
  const btnElems = document.querySelectorAll(".visual-btm-list");
  const side = document.querySelectorAll(".visual-side");
  const prevBtn = document.querySelector(".left");
  const nextBtn = document.querySelector(".right");
  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");
  let current = 0;
  const totalPage = visualSlide.length;

  for (let i = 0; i < totalPage; i++) {
    visualSlide[i].dataset.index = i;
    btnElems[i].dataset.index = i;
    side[i].dataset.index = i;
  }

  visualSlide[current].classList.add("On");
  btnElems[current].classList.add("Active");
  function nextEvent() {
    if (current < totalPage - 1) {
      current++;
    } else {
      current = 0;
    }
    barActive();
    imgActive();
  }
  function prevEvent() {
    if (current > 0) {
      current--;
    } else {
      current = totalPage - 1;
    }
    barActive();
    imgActive();
  }

  //imgActive
  function imgActive() {
    visualSlide.forEach((img) => {
      if (current == img.dataset.index) {
        visualSlide[current].classList.add("On");
      } else {
        img.classList.remove("On");
      }
    });
  }
  //barActive
  function barActive() {
    btnElems.forEach((btn) => {
      if (current == btn.dataset.index) {
        btnElems[current].classList.add("Active");
      } else {
        btn.classList.remove("Active");
      }
    });
  }
  function autoPlay() {
    nextEvent();
  }
  let interval = setInterval(function () {
    autoPlay();
  }, 4000);

  //stop Play
  function stopAutoPlay() {
    clearInterval(interval);
    stopBtn.style.display = "none";
    startBtn.style.display = "block";
  }
  //start Again
  function intervalAgain() {
    interval = setInterval(autoPlay, 4000);
    startBtn.style.display = "none";
    stopBtn.style.display = "block";
  }

  nextBtn.addEventListener("click", nextEvent);
  prevBtn.addEventListener("click", prevEvent);
  stopBtn.addEventListener("click", stopAutoPlay);
  startBtn.addEventListener("click", intervalAgain);
})();
