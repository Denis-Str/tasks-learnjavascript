// let  obj = {
//     a: ' qwerty',
//     toString: function() {
//         return 'toString' + this.a;
//     },
//     b: function () {
//     return 'symbol' + this.a;
//     },
//     c: function () {
//         return '1234 ' + this.b()
//     }
// };

// alert(obj);
// alert(obj.b());
// alert(obj.c());

// function f() {
//     let a = 'qwer ';
//     return a + this.a
// }

// console.log(f.apply(obj));


// function ask(question, answer, ok, fail) {
//     let result = prompt(question, '');
//     if (result.toLowerCase() === answer.toLowerCase()) ok();
//     else fail();
// }
//
// let user = {
//     login: 'Василий',
//     password: '12345',
//
//     loginOk: function() {
//         alert( this.login + ' вошёл в сайт' );
//     },
//
//     loginFail: function() {
//         alert( this.login + ': ошибка входа' );
//     },
//
//     checkPassword: function() {
//         ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//     }
// };
//
// user.checkPassword();

// function sum() {
//     return [].reduce.call(arguments, function (a, b) {
//         return a + b
//     })
// }
//
// function mul() {
//     return [].reduce.call(arguments, function(a, b) {
//         return a * b;
//     });
// }
//
// function applyAll(func) {
//     return func.apply(this, [].slice.call(arguments, 1))
// }
//
// console.log(sum(1, 2, 3));
// console.log( applyAll(sum, 1, 2, 3) );
// console.log( applyAll(mul, 2, 3, 4) );
// console.log( applyAll(Math.max, 2, -2, 3) );
// console.log( applyAll(Math.min, 2, -2, 3) );

// function ask(question, answer, ok, fail) {
//     let result = prompt(question, '');
//     if (result.toLowerCase() === answer.toLowerCase()) ok();
//     else fail();
// }

// let user = {
//     login: 'Василий',
//     password: '12345',
//
//     loginOk: function() {
//         alert( this.login + ' вошёл в сайт' );
//     },
//
//     loginFail: function() {
//         alert( this.login + ': ошибка входа' );
//     },
//
//     checkPassword: function() {
//         ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//     }
// };
//
// user.checkPassword();

function ask(question, answer, ok, fail) {
    let result = prompt(question, '');
    if (result.toLowerCase() === answer.toLowerCase()) ok();
    else fail();
}

let user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function(result) {
        alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
    },

    checkPassword: function() {
        let self = this;
        ask("Ваш пароль?", this.password,
            function() {
                self.loginDone(true);
            },
            function() {
                self.loginDone(false);
            }
        );
    }
};

let vasya = user;
user = null;
vasya.checkPassword();

