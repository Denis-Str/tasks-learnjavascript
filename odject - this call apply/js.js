
function func() {
    console.log("func ==> " + this.message + " " + this.pass)
}


function func1(arg1, arg2) {
    console.log("func1 ==> " + this[arg1] + " " + this[arg2])
}

let box = {
    message: "qwerty", pass: 'pass',
    // func: func,
};

let box1 = { message: 'qwerty1' };

// box.func();
// func.call(box);
// func1.call(box, 'message', 'pass');
// func1.apply(box, ['message', 'pass']);

// console.log(box1);

// box1.method = func;
// box1.method();

// func.call(box1);
// func1.call(box1, 'message', 'pass');
box1.pass = box.pass;
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

