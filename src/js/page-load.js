import { generateDiv } from "./helpful-scripts";

export function loadHomePage() {
  let content = document.querySelector("#content");

  let title = generateDiv("h1", "class", "hero-title", "Omakase Kimono");

  let description = generateDiv(
    "p",
    "class",
    "hero-copy",
    "The Taste to Die For"
  );

  let heroImage = generateDiv(
    "img",
    "class",
    "restaurant-image",
    null,
    "src",
    "https://infatuation.imgix.net/media/images/guides/dark-chicago-restaurant-power-rankings/Izakaya_sandynoto.jpg"
  );

  let location = generateDiv(
    "p",
    "class",
    "location",
    "Located @ 123 Fake Street, Chicago IL"
  );
  let hours = generateDiv(
    "p",
    "class",
    "hours",
    "Thurs - Sunday, seating @ 4:45 p.m."
  );

  let contents = [title, description, heroImage, location, hours];

  contents.forEach(function (item) {
    content.append(item);
  });
}
