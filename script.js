const container = document.querySelector('.container');

for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
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