const NEW_YEAR_TOYS = document.querySelectorAll(".new-year__toy");
const FLOATING_PRESENT = document.querySelector("button[name='get-a-present']");
const FLOATING_POPUP_CARDS = document.querySelectorAll(".present-popup__card");

NEW_YEAR_TOYS.forEach(function (toy) {
  toy.addEventListener("mouseenter", nyToyHoverHandler);
  toy.addEventListener("touchstart", nyToyHoverHandler);
  toy.addEventListener("click", function () {
    FLOATING_PRESENT.click();
  });
});

FLOATING_POPUP_CARDS.forEach(function (card) {
  card.addEventListener("mouseenter", onCardHover);
  card.addEventListener("touchstart", onCardHover);
});

FLOATING_PRESENT.addEventListener("click", function () {
  FLOATING_PRESENT.classList.add("opened");
});

function nyToyHoverHandler(event) {
  const target = event.target;
  if (target.classList.contains("animate")) return;

  target.classList.add("animate");

  let t = setTimeout(function () {
    target.classList.remove("animate");
    clearTimeout(t);
  }, 1450);
}

function onCardHover(event) {
  const target = event.target;

  target.classList.add("hovered");
}
