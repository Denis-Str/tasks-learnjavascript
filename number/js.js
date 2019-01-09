// let numberOne = +prompt('inter number one', '');
// let numberTwo = +prompt('inter number two', '');
// let sum;
// (isFinite(numberOne) && isFinite(numberTwo)) ? alert(sum = numberOne + numberTwo) : alert('inter not number');

// let a = 0.1;
// let b = 0.2;
//
// alert(+(a + b).toFixed(2));

function randomInteger (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

alert(randomInteger(5, 20));
