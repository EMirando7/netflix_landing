const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//select tab content item function

//this runs when clicking on tab
function selectItem(e) {
  removeShow();
  removeBorder();//this function is binded elsewhere
  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}







//remove border when something else iterates the tab items
function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));

