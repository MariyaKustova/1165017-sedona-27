var closeOpenFormButton = document.querySelector(".button-brown");
var formReservation = document.querySelector(".form-reservation");

var searchResultsButton = formReservation.querySelector(".search-options");

var arrivalDate = formReservation.querySelector("[name=arrival-date]");
var dateDeparture = formReservation.querySelector("[name=date-departure]");
var adultsGuests = formReservation.querySelector("[name=number-adults-guests]");
var childrenGuests = formReservation.querySelector(
  "[name=number-children-guests]"
);
var buttonGuest = formReservation.querySelector(".button-guests");


closeOpenFormButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  formReservation.classList.toggle("close-form");
});

closeOpenFormButton.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    formReservation.classList.toggle("close-form");
}});

function closeFormReservation(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        formReservation.classList.add("close-form");
        closeOpenFormButton.focus();
      }
}

formReservation.addEventListener("keydown", closeFormReservation);

formReservation.addEventListener("submit", function(evt) {
  if (!arrivalDate.value || !dateDeparture.value) {
    evt.preventDefault();
  }
});
