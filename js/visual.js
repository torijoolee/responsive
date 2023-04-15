(() => {
  const visualSlide = document.querySelectorAll(".visual-slide");
  const btnElems = document.querySelectorAll(".visual-btm-list");
  const btnLink = document.querySelectorAll(".visual-btm-list a");
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
    btnLink[i].dataset.index = i;
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
  }, 5000);

  //stop Play
  function stopAutoPlay() {
    clearInterval(interval);
    stopBtn.style.display = "none";
    startBtn.style.display = "block";
  }
  //start Again
  function intervalAgain() {
    interval = setInterval(autoPlay, 5000);
    startBtn.style.display = "none";
    stopBtn.style.display = "block";
  }
  //click btn
  function moveToSlide(event) {
    stopAutoPlay();
    btnElems.forEach((elem) => {
      elem.classList.remove("Active");
    });
    event.target.parentNode.classList.add("Active");
    const idx = event.target.dataset.index;
    if (idx == null) return;
    visualSlide.forEach((elem) => {
      if (elem.dataset.index == idx) {
        elem.classList.add("On");
      } else {
        elem.classList.remove("On");
      }
    });
  }

  btnLink.forEach((btn) => {
    btn.addEventListener("click", moveToSlide);
  });

  nextBtn.addEventListener("click", nextEvent);
  prevBtn.addEventListener("click", prevEvent);
  stopBtn.addEventListener("click", stopAutoPlay);
  startBtn.addEventListener("click", intervalAgain);
})();
