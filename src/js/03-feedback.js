import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = "feedback-form-state";

const formData = {};

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

populateForm()

function populateForm() {
    const object = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (object) {
        emailInput.value = object.email || '';
        messageInput.value = object.message || '';
    }
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

