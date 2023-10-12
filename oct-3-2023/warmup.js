// on click (click listener)
// increment the click count
// store the click count into local storage
let clickCount = 0;

function handleClick() {
    const elementToShowClick = document.querySelector('#number-of-clicks');
    
    clickCount = clickCount + 1;
    localStorage.setItem("clickCount", clickCount);

    elementToShowClick.textContent = clickCount;
}


// the initial load

function bindClickListener() {
// add a click listener to the button
    // grab the element
    // add the click listener

    const buttonElement = document.querySelector("#click-button")

    buttonElement.addEventListener('click', handleClick);
}

function initialRender() {
    // on render, display the click count that previously used
    const elementToShowClick = document.querySelector('#number-of-clicks');
    
    clickCount = Number(localStorage.getItem("clickCount") ?? 0);

    elementToShowClick.textContent = clickCount;
}

function onInitialLoad() {
    bindClickListener()
    initialRender()
}

onInitialLoad();

