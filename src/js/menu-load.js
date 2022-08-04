import { generateDiv } from "./helpful-scripts";

export function loadMenuPage() {
  console.log("loading menu Page");

  let content = document.querySelector("#content");

  let title = generateDiv("h1", "class", "menu-title", "Our Menu");

  let description = generateDiv(
    "p",
    "class",
    "menu-description",
    "The finest and most exquisite ingredients"
  );

  let heroImage = generateDiv(
    "img",
    "class",
    "restaurant-image",
    null,
    "src",
    "https://images.squarespace-cdn.com/content/v1/56bab4d47da24fa6a40889e4/1460576681829-5DBKF50IVNFTFXIZL8PE/Background_0004_Tuna.jpg?format=2500w"
  );

  let menuName = generateDiv("h2", "class", "menu-name", "Prefix Menu");

  let contents = [title, description, heroImage, menuName];

  let menuItems = [
    ["Ankimo", "hiramasa, monkfish liver, pearl onion"],
    ["Zuwagani", "snow crab, kani miso, tozazu jelly"],
    ["AKAMI", "bluefin lean tuna, mountain yam"],
    ["SASHIMI", "seasonal selection of sashimi"],
    ["KUSSHI OYSTER", "sudachi mignonette, smoked trout roe"],
  ];

  menuItems.forEach(function (item) {
    let itemName = generateDiv("h2", "class", "item-name", item[0]);
    let itemDescription = generateDiv(
      "p",
      "class",
      "item-description",
      item[1]
    );

    contents.push(itemName);
    contents.push(itemDescription);
  });

  contents.forEach(function (item) {
    content.append(item);
  });
}
