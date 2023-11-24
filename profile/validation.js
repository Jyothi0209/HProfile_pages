// validation.js

function validateForm(event) {
    event.preventDefault();

    // Validation logic for each field
    const nameInput = document.getElementById('name');
    const nameValidation = document.getElementById('nameValidation');
    nameValidation.innerHTML = nameInput.value.match(/^[A-Za-z\s]+$/) ? '<span style="color: green;">&#10004;</span>' : '<span style="color: red;">&#10008;</span>';

    const locationInput = document.getElementById('location');
    const locationValidation = document.getElementById('locationValidation');
    locationValidation.innerHTML = locationInput.value.match(/^[A-Za-z\s]+$/) ? '<span style="color: green;">&#10004;</span>' : '<span style="color: red;">&#10008;</span>';

    const familyInput = document.getElementById('family-member-count');
    const familyValidation = document.getElementById('familyValidation');
    familyValidation.innerHTML = familyInput.value.match(/^\d+$/) ? '<span style="color: green;">&#10004;</span>' : '<span style="color: red;">&#10008;</span>';
}
