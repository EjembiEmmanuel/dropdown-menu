import "./style.css";

export function showDropDownMenu(element, animation) {
  // Select target elements
  const dropDownMenu = document.querySelector(`.${element.dataset.toggle}`);
  const dropDownMenus = document.querySelectorAll("[data-menu]");

  // Hide open dropdown menu
  dropDownMenus.forEach(function (openDropdown) {
    if (openDropdown.classList.contains("open-dropdown")) {
      openDropdown.style.display = "none";
      openDropdown.classList.remove("open-dropdown");
    }
  });

  // Show dropdown menu
  dropDownMenu.style.display = "block";
  dropDownMenu.classList.add("open-dropdown");

  // Trigger animation if there is any
  if (animation) {
    dropDownMenu.classList.add(animation);
  }
}

//Hide open dropdown menu when the user clicks a menu item or outside the menu
window.onclick = function (event) {
  if (!event.target.matches("[data-toggle]")) {
    let dropdowns = document.querySelectorAll("[data-menu]");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
