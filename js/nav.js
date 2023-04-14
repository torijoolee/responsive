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
  const gnbMenuElems = document.querySelectorAll(".nav-menu-a");
  const subMenu = document.querySelector(".sub-menu");
  const subBoxes = document.querySelectorAll(".nav-sub-box");

  //gnb메뉴를 클릭하면 클릭된 타깃의 index출력
  //타깃의 index와 같은 sub-box를 보여준다.
  function handleMenu() {
    console.log("click");
    gnbMenu.classList.add = "Active";
  }
  gnbMenu.addEventListener("click", handleMenu);
})();

// for (let i = 0; i < gnbMenuElems.length; i++) {
//   gnbMenuElems[i].dataset.index = i;
//   subBoxes[i].dataset.index = i;

//   console.log(event.target.dataset.index);
//   if (event.target.dataset.index == subBoxes[i].dataset.index) {
//     subBoxes[i].classList.add = "Over";
//   }
// }
