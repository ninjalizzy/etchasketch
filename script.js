const container = document.querySelector('.container');

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

let changeColor = (e) => {
    e.target.style.backgroundColor = "blue";
};

boxes.forEach((item) => {
    item.addEventListener('mouseover', changeColor);
});