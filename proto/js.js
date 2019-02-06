function Obj(name) {
    this.name = name;
}

Obj.prototype.say = function () {
    alert(this.name)
};

let obj = new Obj('123');
obj.say();


// console.log(Obj1)

let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal
console.log(rabbit);
console.log( rabbit.eats ); // true

String.prototype.repeat = function (val) {
    return new Array(val + 1).join(this);
};
console.log("123".repeat(4));

// function f() {
//     console.log( "привет" );
// }
//
// Function.prototype.defer = function( ms) {
//   return setTimeout(this, ms)
// };
//
// f.defer(1000); // выведет "привет" через 1 секунду

// function f(a, b) {
//     console.log( a + b );
// }
//
// Function.prototype.defer = function(ms) {
//   // return setTimeout(this, ms)
//     let f = this;
//     return function () {
//         let args = arguments;
//         let context = this;
//         setTimeout( function() {
//             f.apply(context, args)
//         }, ms)
//     }
//
// };
//
// // console.log(f(1, 2))
//
// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// function CoffeeMachine(power) {
//     this._power = power;
//     this._waterAmount = 0;

    // function getTimeToBoil() {
    //     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    // }

    // this.run = function() {
    //     setTimeout(function() {
    //         alert( 'Кофе готов!' );
    //     }, getTimeToBoil());
    // };
    //
    // this.setWaterAmount = function(amount) {
    //     waterAmount = amount;
    // };
// }

// CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
//
// CoffeeMachine.prototype._getTimeToBoil = function () {
//   return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
// };
//
// CoffeeMachine.prototype.run = function() {
//     setTimeout(function() {
//         alert( 'Кофе готов!' );
//     }, this._getTimeToBoil());
// };
// CoffeeMachine.prototype.setWaterAmount = function (amount) {
//     this._waterAmount = amount;
// };
//
// let coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();