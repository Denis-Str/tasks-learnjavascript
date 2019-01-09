// Проверка объекта на наличе свойств

// let schedule = {};
//
// function isEmpty(obj) {
//     let str = obj;
//     let flag = true;
//     for (let key in obj) {
//         (str[key] === undefined) ? flag = true : flag = false;
//     }
//     return flag || alert('нет сотрудников');
// }
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false
//

// суммирует свойства объекта

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// function sum(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }
// alert(sum(salaries));


//провереяет свойство число/строка, если число то умножает свойство

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function isNumber(n) {
//     return !isNaN(n) && isFinite(n);
// }
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (isNumber(obj[key])) {
//             obj[key] = obj[key] * 2;
//         }
//     }
// }
//
// multiplyNumeric(menu);


//наличе свойств короткий вариант
function isEmpty(obj) {
    for (let key in obj) {
        return true ;
    }
    return false;
}

// Стрелочня функиция на проверку свойств
// let isEmpty = (obj) => {
//     for (let key in obj) {
//         return true;
//     }
//     return false;
// }


// выводит имя сотрудника с наибольшей зарплатой
let salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function isMax(obj, flag) {
    let name;
    let max = 0;
    if (flag) {
        for (let key in salaries) {
            if ( salaries[key] > max) {
                max = salaries[key];
                name = key;
            }
        }
        return alert(name);
    }
    return alert('нет сотрудников');
}

isMax(salaries, isEmpty(salaries));
