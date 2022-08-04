import { generateDiv } from "./helpful-scripts";

export function createTabs() {
  let tag;
  let attrType1;
  let attrValue1;
  let html;
  let attrType2;
  let attrValue2;
  let content = document.querySelector("#tabs");

  console.log("tabs created!");
  let homeBtn = generateDiv("button", "id", "Home", "Home");
  let menuBtn = generateDiv("button", "id", "Menu", "Menu");
  let contactBtn = generateDiv("button", "id", "Contact", "Contact");

  content.appendChild(homeBtn);
  content.appendChild(menuBtn);
  content.appendChild(contactBtn);
}
