const NEW_YEAR_TOYS = document.querySelectorAll(".new-year__toy");

NEW_YEAR_TOYS.forEach(function (toy) {
  toy.addEventListener("mouseenter", nyToyHoverHandler);
  toy.addEventListener("touchstart", nyToyHoverHandler);
});

function nyToyHoverHandler(event) {
  if (event.target.classList.contains("animate")) return;

  event.target.classList.add("animate");

  let t = setTimeout(function () {
    event.target.classList.remove("animate");
    clearTimeout(t);
  }, 2000);
}
