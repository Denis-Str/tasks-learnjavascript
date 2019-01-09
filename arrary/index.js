// let styles = ['Джаз', 'Блюз'];
// alert(styles);
// styles.push('Рок-н-Ролл');
// alert(styles);
// styles[styles.length-2] = 'Классика';
// alert(styles);
// styles.shift();
// alert(styles);
// styles.unshift('Рэп', 'Регги');
// alert(styles);

// let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// let min = 0;
// let max = arr.length-1;
// let rand = min + Math.floor(Math.random() * (max + 1 - min));
// alert(arr[rand]);

//Создайте калькулятор для введённых значений
// let str;
// let sum = 0;
// let arr = [];
// do {
//     str = parseInt(prompt('input', ''));
//     if (isNaN(str)) {
//        break;
//     } else {
//         arr.unshift(str);
//         sum += str;};
//         arr.shift();
// } while (!false);
// alert(sum);

// arr = ["test", 2, 1.5, false];
// // function find (arr, value) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] === value) {
// //            return alert(i);
// //         }
// //     }
// //     return alert(-1);
// // }
// //
// // find(arr, "test"); // 0
// // find(arr, 2); // 1
// // find(arr, 1.5); // 2
// // find(arr, 0); // -1
// // find(arr, false); // 3

// let arr = [5, 4, 3, 8, 0];
// let filtered = [];
// function filterRange(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= b && arr[i] >= a) {
//             filtered.push(arr[i])
//         }
//     }
//     return filtered;
// }
// filterRange(arr, 3, 5);
// alert(filtered);

// let str = 'position:fixed;border:1px solid red;color: red;';
// let arr = [];
// let styleObj = {};
// str.split(';');
// arr = str;
// function styleToObj() {
//     for (let i = 0; i < arr.length; i ++) {
//         styleObj[arr[i]] = arr[i+1];
//     }
//     return styleObj;
// }
// styleToObj();

// function addClass(obj, cls) {
//     let classes = obj.className ? obj.className.split(' ') : [];
//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i] == cls) return; // класс уже есть
//     }
//     classes.push(cls); // добавить
//     obj.className = classes.join(' '); // и обновить свойство
// }
// let obj = {
//     className: 'open menu'
// };
//
// addClass(obj, 'new');
// addClass(obj, 'open');
// addClass(obj, 'me');
// alert(obj.className) // open menu new me

// function camelize(str) {
//     let strSplit = str.split('-').filter((item) => {
//       return item !== "";
//     });
//     let strUpper = strSplit.map((item) => {
//       return item.toUpperCase().slice(0, 1) + item.slice(1)
//     });
//   return strSplit[0].slice(0, 1) + strUpper.join("").slice(1);
// }
// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));

// let { a, b } = { a: 1, b: 2 };
// let [c, d] = [1, 2];
// let [{ a }, { b }] = [{ a: 1 }, { b: 1 }];

let obj = {
  className: 'open menu',
  className1: 'my menu menu'
};
function removeClass(obj, cls) {

  // let objectKey = Object.keys(obj).map( (key) => {
  //   return obj[key];
  // })
  // let newClass = objectKey.map( (value, index, array) => {
  //   return array.filter((item) => {
  //       return item !== cls;
  //   })
  // })
  // console.log(newClass)

  // let newClass = objectKey.split(" ").filter( (item) => {
  //   console.log(item)
  //   return item !== cls;
  // }).join(" ");

  for (let key in obj) {
    let newStr = obj[key].split(" ").filter( (item) => {
      return item !== cls;
    });
    obj[key] =  newStr.join(" ");
  }
  return console.log(obj)
}
// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)
removeClass(obj, 'menu'); // 'my'


// let arr = [5, 3, 8, 1];
// function filterRangeInPlace(arr, a, b) {
//   let value = arr.filter( (value) => {
//     return value >= a && value <= b;
//   })
//   return console.log(value);
// }
//
// filterRangeInPlace(arr, 1, 4);

// let arr = [5, 2, 1, -10, 8];
//
// function compareReversed(a, b) {
//   return b - a;
// }
//
// arr.sort(compareReversed);
//
// alert( arr );

// let arr = ["HTML", "JavaScript", "CSS"];
//
// let arrSorted = arr.slice().sort();
//
// console.log(arrSorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)