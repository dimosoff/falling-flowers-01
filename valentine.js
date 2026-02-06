const TOYS = document.querySelectorAll(".valentine__toy, .valentine__center");
const FLOATING_PRESENT = document.querySelector("button[name='get-a-present']");
const MODAL_CLOSE = document.querySelectorAll(".modal button");
const MODAL = document.querySelector(".modal");
const FLOATING_POPUP_CARDS = document.querySelectorAll(".present-popup__card");
const MODAL_PRESENT_HIDE = document.querySelectorAll("[data-present-hide] button");

FLOATING_PRESENT && FLOATING_PRESENT.addEventListener("click", modalOpen);

MODAL_CLOSE.forEach(function (button) {
  button.addEventListener("click", modalClose);
});

TOYS.length &&
  TOYS.forEach(function (toy) {
    toy.addEventListener("mouseenter", nyToyHoverHandler);
    toy.addEventListener("touchstart", nyToyHoverHandler);
    toy.addEventListener("click", toyClick, true);
  });

FLOATING_POPUP_CARDS.forEach(function (card) {
  card.addEventListener("mouseenter", onCardHover);
  card.addEventListener("touchstart", onCardHover);
});

FLOATING_PRESENT &&
  TOYS.length &&
  FLOATING_PRESENT.addEventListener("click", function () {
    FLOATING_PRESENT.classList.add("opened");
    // toysRemoveEvents();
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

document.addEventListener("click", function (event) {
  if (!MODAL.classList.contains("opened")) return;
  if (!event.target.closest(".modal__inner")) MODAL.classList.remove("opened");
});

function modalOpen() {
  setTimeout(function () {
    MODAL && MODAL.classList.add("opened");
  }, 500);
}

function modalClose() {
  MODAL && MODAL.classList.remove("opened");
}

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
  modalOpen();
  // toysRemoveEvents();
}

function toysRemoveEvents() {
  TOYS.forEach(function (toy) {
    toy.removeEventListener("click", toyClick, true);
  });
}
