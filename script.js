function buildGrid() {
  let row = 1;
  let column = 1;
  let rowtot = Number(prompt ('What size grid?', 16));
  let celltot = rowtot * rowtot;
  let gridContainer = document.querySelector('.grid');

  gridContainer.style.display = 'grid';
  gridContainer.style.gridTemplateRows = `repeat(${rowtot}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${rowtot}, 1fr)`;

  for (let i = 1; i <= celltot; i++) {
    let cell = document.createElement('div');
    
    cell.classList.add('cell');
    cell.style.gridRow = row;
    cell.style.gridColumn = column;
    cell.style.border = '1px solid black';
    cell.style.fontSize = '8px';
    cell.textContent = i;
    column += 1;
    if (column === rowtot + 1) {
      row += 1;
      column = 1;
    }
    gridContainer.appendChild(cell);
  }

  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function () {
      cells[i].classList.toggle('colored');
    });
  }
}

function reset() {
  let cells = document.getElementsByClassName("cell");
  for (let i = cells.length - 1; i >= 0; --i) {
    cells[i].setAttribute('class', 'reset');
  }
  buildGrid();
}

function getRandomRGB () {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

buildGrid();

