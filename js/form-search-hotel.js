var closeOpenFormButton = document.querySelector(".button-brown");
var formReservation = document.querySelector(".form-reservation");

var searchResultsButton = formReservation.querySelector(".search-options");

var arrivalDate = formReservation.querySelector("[name=arrival-date]");
var dateDeparture = formReservation.querySelector("[name=date-departure]");
var adultsGuests = formReservation.querySelector("[name=number-adults-guests]");
var childrenGuests = formReservation.querySelector(
  "[name=number-children-guests]"
);
var blockReservation = document.querySelector(".block-reservation");

var isStorageSupport = true;
var storageAdultsGuests = "";
var storageChildrenGuests = "";

try {
  storageAdultsGuests = localStorage.getItem("adultsGuests");
  adultsGuests.value = storageAdultsGuests;
  storageChildrenGuests = localStorage.getItem("childrenGuests");
  childrenGuests.value = storageChildrenGuests;
} catch (err) {
  isStorageSupport = false;
}

closeOpenFormButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  formReservation.classList.toggle("close-form");
  // formReservation.classList.add("form-appear");
});

closeOpenFormButton.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    formReservation.classList.toggle("close-form");
  }
});

function closeFormReservation(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    formReservation.classList.add("close-form");
    closeOpenFormButton.focus();
  }
}

formReservation.addEventListener("keydown", closeFormReservation);

formReservation.addEventListener("submit", function(evt) {
  if (
    !arrivalDate.value ||
    !dateDeparture.value ||
    !adultsGuests.value ||
    !childrenGuests.value
  ) {
    evt.preventDefault();
    blockReservation.classList.add("modal-error");
    setTimeout(function() {
      blockReservation.classList.remove("modal-error");
    }, 1000);
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultsGuests", adultsGuests.value);
      localStorage.setItem("childrenGuests", childrenGuests.value);
    }
  }
});
