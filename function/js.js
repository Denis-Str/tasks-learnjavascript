// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }
// console.log(sum(1)(2));
// console.log(sum(5)(-1));

function makeBuffer() {
    let str = ' ';

    function buffer(value) {
        if (arguments.length === 0) {
            return str;
        }
        return str += value;
    }
    buffer.clear = function() {
        str = ' ';
    };
    return buffer
}

let buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log( buffer() );

let buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);
console.log( buffer2() );

buffer.clear();
console.log( buffer() );

function makeArmy() {

    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            return i;
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

console.log(army[0]());
console.log(army[5]());
console.log(army[6]());

function showFullName() {
    console.log( this.firstName + " " + this.lastName );
}

let user = {
    firstName: "Василий",
    lastName: "Петров"
};

// функция вызовется с this=user
showFullName.apply(user); // "Василий Петров"