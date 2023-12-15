const NEW_YEAR_TOYS = document.querySelectorAll(".new-year__toy");
const FLOATING_PRESENT = document.querySelector("button[name='get-a-present']");
const FLOATING_POPUP_CARDS = document.querySelectorAll(".present-popup__card");
const MODAL_PRESENT_HIDE = document.querySelectorAll(
  "[data-present-hide] button"
);

NEW_YEAR_TOYS.length &&
  NEW_YEAR_TOYS.forEach(function (toy) {
    toy.addEventListener("mouseenter", nyToyHoverHandler);
    toy.addEventListener("touchstart", nyToyHoverHandler);

    FLOATING_PRESENT && toy.addEventListener("click", toyClick, true);
  });

FLOATING_POPUP_CARDS.forEach(function (card) {
  card.addEventListener("mouseenter", onCardHover);
  card.addEventListener("touchstart", onCardHover);
});

FLOATING_PRESENT &&
  NEW_YEAR_TOYS.length &&
  FLOATING_PRESENT.addEventListener("click", function () {
    FLOATING_PRESENT.classList.add("opened");
    toysRemoveEvents();
  });

MODAL_PRESENT_HIDE.length &&
  FLOATING_PRESENT &&
  MODAL_PRESENT_HIDE.forEach(function (button) {
    button.addEventListener("click", function () {
      setTimeout(function () {
        FLOATING_PRESENT.classList.add("hide");
        FLOATING_PRESENT.classList.remove("opened");
      }, 300);
    });
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

function toyClick() {
  FLOATING_PRESENT.click();
  toysRemoveEvents();
}

function toysRemoveEvents() {
  NEW_YEAR_TOYS.forEach(function (toy) {
    toy.removeEventListener("click", toyClick, true);
  });
}
