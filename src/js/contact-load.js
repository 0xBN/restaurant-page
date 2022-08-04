import { generateDiv } from "./helpful-scripts";

export function loadContactPage() {
  console.log("loading contact Page");

  let content = document.querySelector("#content");

  let title = generateDiv("h1", "class", "contact-title", "Contact Us");

  let description = generateDiv(
    "p",
    "class",
    "contact-description",
    "We love to hear from our customers!"
  );

  let heroImage = generateDiv(
    "img",
    "class",
    "restaurant-image",
    null,
    "src",
    "https://www.aquariumnexus.com/wp-content/uploads/2021/10/koi-fish-types.jpg"
  );

  let contactInformation = generateDiv(
    "p",
    "class",
    "contact-info",
    "Call us at 123.456.7890 or write to us at inquiry@kimono.com"
  );

  let contactForm = generateDiv("form", "class", "contact-form");

  let contents = [title, description, heroImage, contactInformation];

  contents.forEach(function (item) {
    content.append(item);
  });
}
