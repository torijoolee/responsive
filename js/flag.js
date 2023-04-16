(() => {
  const prevBtn = document.querySelector(".flag-side.left");
  const nextBtn = document.querySelector(".flag-side.right");
  const imgSlider = document.querySelectorAll(".flag-slider li");
  const flagBtn = document.querySelectorAll(".flag-btn-wrap li");
  const flagBtnLink = document.querySelectorAll(".flag-btn-wrap li a");

  let current = 0;
  const totalPage = imgSlider.length;

  imgSlider[0].classList.add("On");
  flagBtn[0].classList.add("Act");

  for (let i = 0; i < totalPage; i++) {
    imgSlider[i].dataset.index = i;
    flagBtn[i].dataset.index = i;
    flagBtnLink[i].dataset.index = i;
  }

  //prev Btn
  function prevPageHandle(event) {
    event.preventDefault();
    if (current > 0) {
      current--;
    } else {
      current = totalPage - 1;
    }
    flagBtnState();
    changeImage();
  }

  //next Btn
  function nextPageHandle(event) {
    event.preventDefault();
    if (current < totalPage - 1) {
      current++;
      console.log(current);
    } else {
      current = 0;
    }
    flagBtnState();
    changeImage();
  }

  //changeImg
  function changeImage() {
    imgSlider.forEach((img) => {
      img.dataset.index;
      if (current == img.dataset.index) {
        img.classList.add("On");
      } else {
        img.classList.remove("On");
      }
    });
  }

  //flag-Btn
  function flagBtnState() {
    flagBtn.forEach((btn) => {
      btn.dataset.index;
      if (current == btn.dataset.index) {
        btn.classList.add("Act");
      } else {
        btn.classList.remove("Act");
      }
    });
  }
  //when clicked flagBtn
  function moveToPage(event) {
    event.preventDefault();
    console.log(event.target.dataset.index);
    let target = event.target.dataset.index;
    flagBtn.forEach((link) => {
      if (target == link.dataset.index) {
        link.classList.add("Act");
      } else {
        link.classList.remove("Act");
      }
    });
    imgSlider.forEach((img) => {
      if (target == img.dataset.index) {
        img.classList.add("On");
      } else {
        img.classList.remove("On");
      }
    });
  }

  //이벤트 들어가는 함수의 setInterval 어떻게 ?

  flagBtnLink.forEach((btn) => {
    btn.addEventListener("click", moveToPage);
  });

  prevBtn.addEventListener("click", prevPageHandle);
  nextBtn.addEventListener("click", nextPageHandle);
})();
