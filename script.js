let counts = 0;
let increaseElem = document.getElementById('increase');
let decreaseElem = document.getElementById('decrease');
let resetElem = document.getElementById('reset');
let counter = document.getElementById('counter');

function update() {
    counter.innerHTML = counts;
}

increaseElem.addEventListener('click', () => {
    counts++;
    update();
})
resetElem.addEventListener('click', () => {
    counts = 0;
    update();
})
decreaseElem.addEventListener('click', () => {
    counts--;
    update();
})
