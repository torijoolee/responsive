(() => {
  const mobNavBtn = document.querySelector(".mov-nav-btn");
  const mobNav = document.querySelector(".mob-nav");
  const bg = document.querySelector(".mob-nav .bg");
  // 메뉴타이틀 On
  const menuTitle = document.querySelectorAll(".m-nav-list-tit");
  //타이틀 안에 있는 리스트 //0 => 100
  const innerMenu = document.querySelectorAll(".m-nav-list li dl");
  const searchIcon = document.querySelector(".h-open-search");
  const main = document.querySelector("#main");
  const searchCon = document.querySelector(".search-container");

  //nav open
  function handleMobileNav() {
    mobNav.classList.add("show");
  }
  //nav close
  function closeNav() {
    mobNav.classList.remove("show");
  }
  //accordion
  function handleMenuItem(event) {
    let before = document.querySelector(".m-nav-list-tit.On");
    let current = event.target;
    if (current == null) return;
    if (current.nextElementSibling == null) {
      current = current.parentNode;
    }
    if (before && document.querySelector(".m-nav-list-tit.On") != current) {
      before.nextElementSibling.style.maxHeight = null;
      before.classList.remove("On");
    }
    current.classList.add("On");
    let panel = current.nextElementSibling;
    if (panel.style.maxHeight != 0) {
      panel.style.maxHeight = null;
      current.classList.remove("On");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  menuTitle.forEach((menu) => {
    menu.addEventListener("click", handleMenuItem);
  });
  mobNavBtn.addEventListener("click", handleMobileNav);

  bg.addEventListener("click", closeNav);
  function blurMode() {
    main.classList.add("On");
  }
  function removeSearchMode() {
    main.classList.remove("On");
    searchCon.classList.remove("show");
  }
  searchIcon.addEventListener("click", blurMode);
  main.addEventListener("click", removeSearchMode);
})();
