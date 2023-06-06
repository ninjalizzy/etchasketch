const container = document.querySelector('.container');
const width = parseInt(container.style.width, 10);

do {
    size = prompt("How many squares per side? (Enter 2-100)");
    sizeInt = parseInt(size, 10);
    if (size == null) break;
} while (!Number.isInteger(+size) || sizeInt < 2 || sizeInt > 100);

for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        box = document.createElement('div');
        box.classList.add('boxes');
        container.appendChild(box);
    };
};
const boxes = document.querySelectorAll('.boxes');
let boxWidth = ((width /sizeInt) - 1.454) + 'px';
let boxHeight = parseInt(boxWidth)/1.5 + 'px';

boxes.forEach((item) => {
    item.style.width = boxWidth;
    item.style.height = boxHeight;
})

let ink = '#af00af';
document.getElementById('color-picker').addEventListener(('change'), (e) => {
    ink = e.target.value;
});
let changeColor = (e) => {
    e.target.style.backgroundColor = ink;
};

boxes.forEach((item) => {
    item.addEventListener('mouseover', changeColor);
});

function clearGrid() {
    boxes.forEach((box) => box.style.backgroundColor = 'gray');
}

document.getElementById('clear').addEventListener('mousedown', clearGrid);