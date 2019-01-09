let elem = document.createElement('div');
let body = document.body;
elem.innerHTML = '<b>Новый элемент</b>';

function insertAfter(elem, refElem) { /* ваш код */
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}
insertAfter(elem, body.firstChild); // <--- должно работать

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

div.style.display='flex';
div.style.justifyContent='center';
div.style.alignItems='center';

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


let container = document.getElementById('container');
    container.appendChild(createTree(container, data));

function createTree(element, obj) {
  let ul = document.createElement('ul');
  Object.keys(obj).map((key) => {
    let li = document.createElement('li');
    li.innerHTML = key;
    ul.appendChild(li);
  });
  return element.appendChild(ul);
}

let getKeys = function(obj) {
  let ul = document.createElement('ul');
  Object.keys(obj).map((key) => {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = key;
    console.log(key);
    Object.keys(obj[key]).map( (key) =>{
      let li = document.createElement('li');
      li.innerHTML = key;
      console.log(ul.appendChild(li));
      console.log(key);
      return ul.appendChild(li);
    })
  })
  return ul;
};
getKeys(data);