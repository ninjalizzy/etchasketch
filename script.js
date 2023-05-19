const container = document.querySelector('.container');

for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
        let box = document.createElement('div');
        box.classList.add('boxes');
        container.appendChild(box);
    };
};