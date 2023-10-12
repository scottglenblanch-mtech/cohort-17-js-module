

function getHTMLForGameElement() {
    const dimension = 3;
    
    let html = '<table><tbody>';

    for(let row = 0; row < dimension; row++) {
        html += '<tr>'
        
        for(let column = 0; column < dimension; column++) {
            html += `<td></td>`
        }

        html += '</tr>'
    }

    html += '</tbody></table>'
    
    return html;
}

function addHTMLToGameElement() {
    const gameElement = document.querySelector('#game-container');

    gameElement.innerHTML = getHTMLForGameElement();
}

function bindEventListenersToTableCells() {
    let playerIcon = 'X';
    function makeAMove(clickedElement) {
        clickedElement.innerHTML = playerIcon;
    
        playerIcon = playerIcon === 'X' ? 'O': 'X';
    }

    function handleTableCellClick(event) {
        const clickedElement = event.target;
        const canMakeAMove = clickedElement.innerHTML === '';
        if(canMakeAMove) {
            makeAMove(clickedElement);
        }

    }

    const tableCells = Array.from(document.querySelectorAll('td'));

    tableCells.forEach(tableCellItem => tableCellItem.addEventListener('click', handleTableCellClick))
}


function renderBoard() {
    // add html
    addHTMLToGameElement();
    // bind event listener to html
    bindEventListenersToTableCells();
}


renderBoard();