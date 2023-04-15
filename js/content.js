(() => {
  const btnTab = document.querySelectorAll(".btn-tab");
  const listElems = document.querySelectorAll(".recomm-list");
  btnTab[0].classList.add("On");
  listElems[0].classList.add("Act");

  for (let i = 0; i < btnTab.length; i++) {
    btnTab[i].dataset.index = i;
    listElems[i].dataset.index = i;
  }
  function handleTabList(event) {
    event.preventDefault();
    const tabBtn = event.target.dataset.index;
    btnTab.forEach((tab) => {
      tab.classList.remove("On");
    });
    listElems.forEach((elem) => {
      if (tabBtn == elem.dataset.index) {
        elem.classList.add("Act");
        event.target.classList.add("On");
      } else {
        elem.classList.remove("Act");
      }
    });
  }
  btnTab.forEach((tab) => {
    tab.addEventListener("click", handleTabList);
  });
})();
