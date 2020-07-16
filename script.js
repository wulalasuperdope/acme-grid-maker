const masterGrid = document.querySelector('.grid');
const IdxContent = document.querySelector('.showIdx');
const gridButton = document.querySelector('button');

const rowAlert = document.querySelector('#row-alert');
const colAlert = document.querySelector('#col-alert');

function validation() {
  let rowNum = parseInt(document.getElementById('rowNum').value);
  let colNum = parseInt(document.getElementById('columnNum').value);

  if (typeof rowNum !== 'number' || rowNum < 1 || rowNum > 50) {
    rowAlert.innerHTML = 'rows must be between 1 and 50';
    return false;
  } else if (typeof colNum !== 'number' || colNum < 1 || colNum > 50) {
    colAlert.innerHTML = 'columns must be between 1 and 50';
    return false;
  } else {
    return true;
  }
}

function renderGrid() {
  masterGrid.innerHTML = '';
  let rowNum = parseInt(document.getElementById('rowNum').value);
  let colNum = parseInt(document.getElementById('columnNum').value);
  if (validation()) {
    //add row by row, each row is a new div
    for (let j = 0; j < rowNum; j++) {
      const eachRow = document.createElement('div');
      //make one single row with cells.
      for (let i = 0; i < colNum; i++) {
        const cell = document.createElement('div');
        cell.classList.add('singleCell');
        cell.setAttribute('id', i);
        eachRow.appendChild(cell);
      }

      eachRow.classList.add('singleRow');
      eachRow.setAttribute('id', j);
      masterGrid.appendChild(eachRow);
    }
  }
}

//click event to make a grid
gridButton.addEventListener('click', () => {
  IdxContent.innerHTML = '';
  rowAlert.innerHTML = '';
  colAlert.innerHTML = '';
  renderGrid();
});

//add click event on class "grid", create rIdx and cIdx
masterGrid.addEventListener('click', (ev) => {
  if (ev.target.className === 'singleCell') {
    ev.target.classList.add('toggle-on');
    IdxContent.innerHTML = '';
    const indexContent = document.createElement('div');
    indexContent.innerHTML =
      'rIdx: ' + ev.target.parentNode.id + ' cIdx: ' + ev.target.id;
    IdxContent.appendChild(indexContent);
  }
});
