let container = document.querySelector('.container');
let rows = document.getElementsByClassName('gridRow');
let columns = document.getElementsByClassName('gridColumn');

function createGrid(number) {
    makeRow(number);
    makeColumn(number);
}

function makeRow(numberOfRow) {
    for (let i = 0; i < numberOfRow; i++) {
        let row = document.createElement('div');
        container.appendChild(row);
        row.classList.add('gridRow');
    }
}

function makeColumn(numberOfColumn) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < numberOfColumn; j++) {
            let column = document.createElement('div');
            rows[j].appendChild(column);
            column.classList.add('gridColumn');
        }
    }
}

createGrid(16);

document.querySelectorAll(".gridColumn").forEach(cell=>{
  cell.addEventListener("mouseenter", (e)=>{
    e.target.style.backgroundColor = generateRandomRGB();

  })
  cell.addEventListener("mouseleave", (e)=>{
    e.target.style.backgroundColor = "transparent";
  })
})

function generateRandomRGB(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  
  return `rgb(${r}, ${g}, ${b})`;
}