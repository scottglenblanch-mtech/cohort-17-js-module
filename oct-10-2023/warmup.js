let listOfInputs = [];

// bind the submit function to the 'submit' button
function bindClickEventToSubmitButton() {
    const buttonElement = document.querySelector('button');

    buttonElement.addEventListener('click', handleButtonClick);
}

// create the submit function
// - grab the input and add to a list somewhere
// - sort that list
// - render that list
function handleButtonClick() {
    const inputElement = document.querySelector('input');
    const userInput = inputElement.value;
    
    listOfInputs.push(userInput);

    sortList();
    renderList();
}

function sortList() {
    mergeSort(listOfInputs, 0, listOfInputs.length - 1);
}

// grab the ul element
// clear out the ul element
// add new elements to the ul element
function renderList() {
    const ulElement = document.querySelector('ul');
    let newInnerHTML = '';

    ulElement.innerHTML = '';

    listOfInputs.forEach(inputItem => {
        newInnerHTML = `${newInnerHTML}<li>${inputItem}</li>`;
    });

    ulElement.innerHTML = newInnerHTML;
    
}

bindClickEventToSubmitButton();
