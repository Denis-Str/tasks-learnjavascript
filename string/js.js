// ЗАМЕНА ПЕРВОЙ БУКВЫ

let str = prompt('enter string', '');

function ucFirst(str) {
    return str.charAt(0).toUpperCase();
}

function getString(str) {
    return str.slice(1)
}

if (str) {
    alert(ucFirst(str) + getString(str))
} else {
    alert('empty string')
}

// ПОСИК СПАМА
// let message = prompt('enter string', 'buy ViAgRA now').toLowerCase();
// let targetsArr = ['viagra', 'xxx'];
// let spam;
// let spamWord;
//
// function findSpam() {
//
//     for (let i = 0; i < targetsArr.length; i++) {
//         let findSpam = message.indexOf(targetsArr[i]);
//
//         if (findSpam === -1) {
//             spam = true
//         } else {
//             spam = false;
//             spamWord = targetsArr[i];
//             break;
//             }
//         }
//         return spam;
// }
//
// let checkSpam = () => { (findSpam()) ? alert('true ' + 'not spam') : alert('false - ' + 'find  ' + spamWord) };
//
// // function checkSpam() {
// //
// //     return (findSpam()) ? alert('true ' + 'not spam') : alert('false - ' + 'find  ' + spamWord)
//
//     // for (let i = 0; i < targetsArr.length; i++) {
//     //     let find = message.indexOf(targetsArr[i]);
//     //     if (find === -1) {
//     //         continue;
//     //     } else {
//     //         alert('false ' + 'find spam ' + targetsArr[i]);
//     //         break;
//     //     }
//     // }
//     // return alert('true ' + 'not spam');
// // }
//
// checkSpam(message);

// УСЕЧЕНИЕ СТРОКИ

// let message = prompt('enter string', 'Вот, что мне хотелось бы сказать на эту тему:');
// let maxlength = prompt('enter maxlength', '20');
//
// function truncate(message, maxlength) {
//
//     (message.length > maxlength) ? alert(message.slice(0, maxlength - 3) + '...')  :  alert(message);
//
//     // if (message.length > maxlength) {
//     //     message = message.slice(0, maxlength - 3);
//     //     alert(message + '...');
//     // }
//     // return alert(message)
// }
//
// truncate(message, maxlength);

// ВЫДЕЛИТЬ ЧИСЛО

let price = prompt('enter price', '$120');

function extractCurrencyValue() {
    let priceNumber = price.slice(1);

    (isNaN(+priceNumber)) ? alert('Not a Number') : alert(+priceNumber);

}

extractCurrencyValue();

let a = {a:1};
let b =  {b:1};

alert(a === b)