
// function func() {
//     console.log("func ==> " + this.message + " " + this.pass)
// }
//
//
// function func1(arg1, arg2) {
//     console.log("func1 ==> " + this[arg1] + " " + this[arg2])
// }
//
// let box = {
//     message: "qwerty", pass: 'pass',
//     // func: func,
// };
//
// let box1 = { message: 'qwerty1' };

// box.func();
// func.call(box);
// func1.call(box, 'message', 'pass');
// func1.apply(box, ['message', 'pass']);

// console.log(box1);

// box1.method = func;
// box1.method();

// func.call(box1);
// func1.call(box1, 'message', 'pass');
// box1.pass = box.pass;
// func1.apply(box1, ['message', 'pass']);

// первый способ обертка
// setTimeout(function () {
//     func.apply(box)
// }, 2000);
// setTimeout(function () {
//     func1.apply(box1, ['message'])
// }, 2000);

// вотрой способ через bind
// setTimeout(func.bind(box), 5000);

// метод
// setTimeout(box.func.bind(box), 2000);

// function work(a, b) {
//    // work - произвольная функция
// }
//
// function makeLogging(f, log) {
//     function wrap(a) {
//         log.push(a);
//         return f.call(this, a);
//     }
//     return wrap
// }
// let log = [];
// work = makeLogging(work, log);
//
// work(1); // 1, добавлено в log
// work(5); // 5, добавлено в log
//
// for (let i = 0; i < log.length; i++) {
//     alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
// }

// function work(a, b) {
//     alert( a + b ); // work - произвольная функция
// }
//
// function makeLogging(f, log) {
//     /* ваш код */
//     function wrap() {
//         log.push([].slice.call(arguments));
//         return f.apply(this)
//     }
//     return wrap
// }
//
// let log = [];
// work = makeLogging(work, log);
//
// work(1, 2); // 3
// work(4, 5); // 9
//
// for (let i = 0; i < log.length; i++) {
//     let args = log[i]; // массив из аргументов i-го вызова
//     alert('Лог:' + args.join()); // "Лог:1,2", "Лог:4,5"
// };

