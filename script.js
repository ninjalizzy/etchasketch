const container = document.querySelector('.container');
const width = parseInt(container.style.width, 10);

do {
    size = parseInt(prompt("How many squares per side? (Enter 2-100)"), 10);
} while (isNaN(size) || size < 2 || size > 100);

for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        box = document.createElement('div');
        box.classList.add('boxes');
        container.appendChild(box);
    };
};
const boxes = document.querySelectorAll('.boxes');
let boxWidth = ((width /size) - 1.45) + 'px';
let boxHeight = parseInt(boxWidth)/1.5 + 'px';

boxes.forEach((item) => {
    item.style.width = boxWidth;
    item.style.height = boxHeight;
});

let changeColor = (e) => {
    e.target.style.backgroundColor = "blue";
};

boxes.forEach((item) => {
    item.addEventListener('mouseover', changeColor);
});