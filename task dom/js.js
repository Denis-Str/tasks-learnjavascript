// let data = {
//     "Рыбы": {
//         "Форель": {},
//         "Щука": {}
//     },
//
//     "Деревья": {
//         "Хвойные": {
//             "Лиственница": {},
//             "Ель": {}
//         },
//         "Цветковые": {
//             "Берёза": {},
//             "Тополь": {}
//         }
//     }
// };
// let container = document.getElementById('container');
// let ul = document.createElement('ul');
// let li = document.createElement('li');
// let item = getKey(data);
//
// function createTree(element, obj, item) {
//
//     Object.keys(obj).forEach((value) => {
//         ul.innerHTML += `<li>${value}</li>`;
//            Object.keys(obj[value]).forEach(value => {
//                li.innerHTML += `<ul>${value}</ul>`;
//                ul.appendChild(li);
//
//            });
//         element.appendChild(ul);
//     });
// }
//
// createTree(container, data, item);
//
// function getKey(obj) {
//     Object.values(obj).forEach((value)=> {
//
//         Object.values(value).forEach((value) => {
//             for (let key in value) {
//                 li.innerHTML += `<li>${key}</li>`;
//             }
//         });
//     });
// }
//
//
// function createCalendar(id, year, month) {
//     let div = document.getElementById(id);
//     let table = document.createElement('table');
//     let date = new Date(year, month-1);
//
//     table.innerHTML = '<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>'
//
//     for (let i = 1; i < date.getDay(); i++) {
//         table.innerHTML += '<td></td>';
//     }
//
//     div.appendChild(table);
// }
// createCalendar('cal', 2012, 9);



