let elem = document.createElement('div');
let body = document.body;
elem.innerHTML = '<b>Новый элемент</b>';

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}
insertAfter(elem, body.firstChild);

// setTimeout( () => {
//   return insertAfter(elem, body.lastChild)
// }, 1000)

// function removeChildren(elem) { /* ваш код */
//   return elem.remove(elem.lastChild);
// }
// removeChildren(table); // очищает таблицу
// removeChildren(ol); // очищает список

// let ul = document.createElement('ul');
//     document.body.appendChild(ul);
//     while (true) {
//       let message = prompt('insert', '');
//       if (!message) {
//         break;
//       }
//       let li = document.createElement('li');
//       li.appendChild(document.createTextNode(message));
//       ul.appendChild(li);
//     }

let div = document.getElementById('field');
let ball = document.getElementById('ball');
ball.style.left = (div.clientWidth / 2) - (ball.clientWidth) / 2 + 'px';
ball.style.top = (div.clientHeight / 2) - (ball.clientHeight) / 2 + 'px';

//список ul из объекта

let data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
        "Берёза": {},
      "Тополь": {}
    }
  }
};
()=> {}
let container = document.getElementById('container');

function createTree(element, obj) {

  let ul = document.createElement('ul');
      ul.innerHTML = Object.keys(obj).map((key) => {

      function f(elem) {

        let li = document.createElement('li');
            li.innerHTML = Object.values(obj).map((key)=> {

              return key;
            });
        return elem.appendChild(li);
      }
      f(ul);

      return key;
    });
  return element.appendChild(ul);
}

createTree(container, data);

//календарь в таблице
function createCalendar(id, year, month) {
  let div = document.getElementById('id');
  let date = new Date(year, month - 1);
  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
  for (var i = 0; i < getDay(date); i++) {
    table += '<td></td>';
  }
  div.innerHTML = table;

};
createCalendar("cal", 2012, 9);

