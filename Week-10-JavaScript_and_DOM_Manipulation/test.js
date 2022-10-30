/*Given the below HTML, write some JavaScript that adds a new paragraph to the div anytime the button is clicked. 
The paragraph's content should be the text entered into the input element. 
Clear the input element's text when the button is pressed.

<div id="p-div"></div>
<input id="p-input" type="text" placeholder="New Paragraph">
<button id="p-button">Create</button>*/

let button = document.getElementById('p-button');

button.addEventListener('click', () => {
    var parent = document.getElementById('p-div');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('p-input').value;
    parent.appendChild(newElement);
    document.getElementById('p-input').value = '';
})

