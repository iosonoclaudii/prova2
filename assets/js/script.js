let count = 0;
const valueEl = document.getElementById('value');
const img1El = document.getElementById('img1');
const img2El = document.getElementById('img2');

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  count--;
  updateCounter();
}

function reset() {
  count = 0;
  counterElement.innerText = count;
}


function updateCounter() {
  valueEl.innerText = count;
  if (count % 2 === 0) {
    img1El.src = 'assets/img/walker1.jpg';
  } else {
    img1El.src = 'assets/img/walker2.jpg';
  }
}