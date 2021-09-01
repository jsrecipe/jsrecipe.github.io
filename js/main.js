let sideNavStat = false;

let openSideNav = function() {
  let getSideNav = document.querySelector(".side-nav");
  if (sideNavStat == false) {
    getSideNav.style.width = "70%";
    sideNavStat = true;
  } else {
    getSideNav.style.width = "0";
    sideNavStat = false;
  }
}
