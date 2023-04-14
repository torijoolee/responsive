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
  const gnbMenu = document.querySelector(".gnb-menu");
  const gnbMenuItem = document.querySelectorAll(".nav-menu-a");
  const subMenu = document.querySelector(".sub-menu");
  const subBoxes = document.querySelectorAll(".nav-sub-box");
  function handleMenu(event) {
    gnbMenu.classList.add("Active");
    subMenu.classList.add("On");
    for (let i = 0; i < gnbMenuItem.length; i++) {
      gnbMenuItem[i].dataset.index = i;
      subBoxes[i].dataset.index = i;
      console.log(event.target.dataset.index);
      const target = event.target.dataset.index;
      if (target == subBoxes[i].dataset.index) {
        subBoxes[i].classList.add("Over");
      } else {
        subBoxes[i].classList.remove("Over");
      }
    }
  }

  gnbMenu.addEventListener("click", handleMenu);
})();
