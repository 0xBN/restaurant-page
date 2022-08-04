import { loadHomePage } from "./js/page-load";
import { clearContainer, buttonListeningTest } from "./js/helpful-scripts";
import { createTabs } from "./js/tabs";
import { loadContactPage } from "./js/contact-load";
import { loadMenuPage } from "./js/menu-load";

const startSite = (function () {
  createTabs();
  loadHomePage();
})();

function switchTab() {
  let el = window.event.target.id;
  if (!["Home", "Menu", "Contact"].includes(el)) {
    return;
  }
  clearContainer();
  el === "Home"
    ? loadHomePage()
    : el === "Menu"
    ? loadMenuPage()
    : el === "Contact"
    ? loadContactPage()
    : null;
}

document.addEventListener("click", switchTab);
