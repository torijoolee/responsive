(() => {
  const mobNavBtn = document.querySelector(".mov-nav-btn");
  const mobNav = document.querySelector(".mob-nav");
  const bg = document.querySelector(".mob-nav .bg");
  const menuTitle = document.querySelectorAll(".m-nav-list-tit");
  const innerMenu = document.querySelectorAll(".m-nav-list li dl");

  for (let i = 0; i < menuTitle.length; i++) {
    menuTitle[i].dataset.index = i;
    innerMenu[i].dataset.index = i;
  }

  function handleMobileNav() {
    mobNav.classList.add("show");
  }
  function closeNav() {
    mobNav.classList.remove("show");
  }

  function handleMenuItem(event) {
    console.log(event.target.dataset.index);
    const target = event.target.dataset.index;
    event.target.classList.toggle("On");
    if (event.target.classList.contains("On")) {
      innerMenu.forEach((elem) => {
        if (target == elem.dataset.index) {
          elem.style.height = 300 + "px";
        } else {
          elem.style.height = 0 + "px";
        }
      });
    } else {
      innerMenu.forEach((elem) => {
        elem.style.height = 0 + "px";
      });
    }
  }

  menuTitle.forEach((menu) => {
    menu.addEventListener("click", handleMenuItem);
  });
  mobNavBtn.addEventListener("click", handleMobileNav);
  bg.addEventListener("click", closeNav);
})();
