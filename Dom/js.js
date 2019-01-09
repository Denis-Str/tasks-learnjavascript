// let elem1 = document.documentElement.firstElementChild; // HTML --> head
//
// console.log(elem1);
//
// let elem2 = document.body.children[1]; // body --> ul
//
// console.log(elem2);
//
// let elem3 = document.body.children[1].children[1]; // ul --> second li
//
// console.log(elem3);

  //ЯЧЕЙКИ ПО ДИАГОНАЛИ
let rowsTable = document.body.children[2].children[0].rows;

for (let i = 0; i < rowsTable.length; i++) {
  rowsTable[i].cells[i].style.background = 'red';
  console.log(rowsTable[i].cells[i]);
}

// let elemTable = document.getElementById('age-table');
// let elemLabel = elemTable.getElementsByTagName('label');
// console.log(elemLabel);
//
// let elemRows = elemTable.querySelector('tr');
// let elemCell = elemRows.querySelector('td');
// console.log(elemCell);
//
// let formSecond = document.getElementsByTagName('form')[1];
// let formFirst = document.getElementsByTagName('form')[0];
// console.log(formFirst);
// console.log(formSecond);
//
// let input = formFirst.getElementsByTagName('input')[0];
// console.log(input);
//
// let info = document.getElementsByName('info[0]');
// console.log(info);
//
// let info2 = document.querySelector('form[name = "search-person"] [name="info[0]"]');
// console.log(info2);

// let liElem = document.querySelectorAll('li');
// console.log(liElem);
// for (let i = 0; i < liElem.length; i++) {
//   console.log(liElem[i].innerText);
//   console.log(liElem[i].textContent.trim());
// }

let links = [... document.querySelectorAll('a')];
  console.log(links);
  links.forEach( (link) => {
    if (link.hostname !== 'localhost' && !(link.hostname) === false && link.host !== 'internal.com') {
      link.classList.add('external');
      console.log(link.host)
    }
  });

