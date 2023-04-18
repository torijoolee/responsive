(() => {
  // language
  const selectLang = document.querySelector(".select-language");

  function handleVisible() {
    selectLang.classList.toggle("show");
  }
  selectLang.addEventListener("click", handleVisible);

  // search
  const searchCon = document.querySelector(".search-container");
  const searchIcon = document.querySelector(".h-open-search");
  const closeCon = document.querySelector(".sch-close");

  function handleSearchCon() {
    searchCon.classList.add("show");
  }
  function closeContainer() {
    searchCon.classList.remove("show");
  }
  searchIcon.addEventListener("click", handleSearchCon);
  closeCon.addEventListener("click", closeContainer);

  // sub-menu
  const gnbMenu = document.querySelector(".gnb");
  const navMenu = document.querySelectorAll(".list");
  const noMenu = document.querySelector(".nav-menu-a");
  //대메뉴 이름
  const gnbMenuItem = document.querySelectorAll(".inner-wrap");
  // 서브메뉴 묶음

  for (let i = 0; i < navMenu.length; i++) {
    navMenu[i].dataset.index = i;
    gnbMenuItem[i].dataset.index = i;
  }

  function handleMenu(event) {
    let target = event.target.dataset.index;
    let sibling = event.target.nextElementSibling;
    console.log(target);
    removeFunction();
    if (target == undefined) return;
    if (target == sibling.dataset.index) {
      sibling.classList.add("Over");
      gnbMenu.classList.add("Active");
    } else {
      sibling.classList.remove("Over");
      gnbMenu.classList.remove("Active");
    }
  }

  function removeFunction() {
    gnbMenu.classList.remove("Active");
    gnbMenuItem.forEach((elem) => {
      elem.classList.remove("Over");
    });
  }
  noMenu.addEventListener("mouseover", removeFunction);
  navMenu.forEach((menu) => {
    menu.addEventListener("mouseover", handleMenu);
  });
  gnbMenuItem.forEach((item) => {
    item.addEventListener("mouseleave", removeFunction);
  });
})();
