export function generateDiv(
  tag,
  attrType1,
  attrValue1,
  html,
  attrType2 = null,
  attrValue2 = null
) {
  let x = document.createElement(tag);
  x.setAttribute(attrType1, attrValue1);
  if (!attrValue2 == "") {
    x.setAttribute(attrType2, attrValue2);
  }
  x.innerHTML = html;
  return x;
}

export function clearContainer() {
  document.querySelector("#content").innerHTML = null;
}

export function buttonListeningTest() {
  console.log(window.event.target.id);
}
