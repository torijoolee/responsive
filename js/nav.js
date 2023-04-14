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
})();
