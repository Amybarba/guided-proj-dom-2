console.log('Sanity!');
// event - something a user does
// click - listening for when a user clicks on something
// keydown and keyup - two events that occur
// syntax ---> use a selector event listener, callback function

// step 1 - first select  a DOM element to listen on, whole page is not usually needed
const button = document.getElementById('custom-btn');
const buttonbyClass = document.getElementsByClassName('lambda-button');
console.log(buttonbyClass);
// step 2 - set up addEventListener('what type of event', callback function)
button.addEventListener("click", function() {
    console.log('I CLICKED THE BUTTON');
});

//Click on the button
// when button is clicked it puts into focus/view/scrolls to the custom work form.

//document.documentElement.scrollTop

button.addEventListener("click", function() {
    const body = document.querySelector('body');
window.scrollTo(0, 1000);
});

const firstNameInput = document.querySelector(' .first-name');
firstNameInput.addEventListener('keydown', function(event) {    
    console.log(event);
    console.log(event.target.value);
    const capturedInput = event.target.value;
    button.textContent = capturedInput;
});