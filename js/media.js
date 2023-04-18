(() => {
  const mobNavBtn = document.querySelector(".mov-nav-btn");
  const mobNav = document.querySelector(".mob-nav");
  const bg = document.querySelector(".mob-nav .bg");
  // 메뉴타이틀
  const menuTitle = document.querySelectorAll(".m-nav-list-tit");
  //타이틀 안에 있는 리스트
  const innerMenu = document.querySelectorAll(".m-nav-list li dl");
  const icon = document.querySelectorAll(".icon-nav");
  const searchIcon = document.querySelector(".h-open-search");
  const main = document.querySelector("#main");
  const searchCon = document.querySelector(".search-container");

  for (let i = 0; i < menuTitle.length; i++) {
    menuTitle[i].dataset.index = i;
    innerMenu[i].dataset.index = i;
  }

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
    for (let i = 0; i < menuTitle.length; i++) {
      menuTitle[i].classList.remove("On");
      innerMenu[i].style.display = "none";
      if (event.target.classList.contains("On")) {
        event.target.nextElementSibling.style.display = "block";
        console.log(event.target.nextElementSibling);
      } else {
        event.target.classList.add("On");
      }
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
