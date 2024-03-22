let count = document.querySelector('#two');

function decrement() {
    let value = parseInt(count.innerText);
    value = value+1;
    count.innerText = value;
};

function increment() {
    let value = parseInt(count.innerText);
    value = value - 1;
    count.innerText = value;
};
