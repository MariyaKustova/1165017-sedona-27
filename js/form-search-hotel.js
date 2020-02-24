var closeOpenForm=document.querySelector(".button-brown");
var formReservation=document.querySelector(".form-reservation");

var searchResults=formReservation.querySelector(".search-options");

var arrivalDate=formReservation.querySelector("[name=arrival-date]");
var dateDeparture=formReservation.querySelector("[name=date-departure]");
var adultsGuests=formReservation.querySelector("[name=number-adults-guests]");
var childrenGuests=formReservation.querySelector("[name=number-children-guests]");
var buttonAddGuest=formReservation.querySelector("[name=add-guests]");
var buttonSubtractGuest=formReservation.querySelector("[name=subtract-guests]");


closeOpenForm.addEventListener("click", function(evt) {
    evt.preventDefault();
    if(formReservation.classList.contains('close-form')) {
        formReservation.classList.remove("close-form");
    }else {
        formReservation.classList.add("close-form");
    }    
});

closeOpenForm.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 13) {
    evt.preventDefault();
    if(formReservation.classList.contains('close-form')) {
        formReservation.classList.remove("close-form");
    }else {
        formReservation.classList.add("close-form");
    }    
}});

closeOpenForm.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    formReservation.classList.remove("close-form");
    }  
});

arrivalDate.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    formReservation.classList.add("close-form");
    closeOpenForm.focus();
    }  
});

dateDeparture.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    formReservation.classList.add("close-form");
    closeOpenForm.focus();
    }  
});

adultsGuests.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    formReservation.classList.add("close-form");
    closeOpenForm.focus();
    }  
});

childrenGuests.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    formReservation.classList.add("close-form");
    closeOpenForm.focus();
    }  
});

buttonAddGuest.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    formReservation.classList.add("close-form");
    closeOpenForm.focus();
    }  
});

buttonSubtractGuest.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    formReservation.classList.add("close-form");
    closeOpenForm.focus();
    }  
});

searchResults.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    formReservation.classList.add("close-form");
    closeOpenForm.focus();
    }  
});

searchResults.addEventListener("submit", function(evt){
    if(!arrivalDate.value||!dateDeparture.value) {
        evt.preventDefault();
    }
});