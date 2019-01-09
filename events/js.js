let button = document.getElementById('hider');
    button.addEventListener('click', handler1);
    function handler1() {
      document.getElementById('text').style.display='none';
      setTimeout( () => {
        document.getElementById('text').style.display='block';
      }, 5000)
    }

let menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', handler2);
    function handler2 () {
      let list = document.getElementById('menu');
      list.classList.toggle('hidden');
    }

let pos = 0;

let right = document.getElementById('right');
    right.addEventListener('click', handlerRight);
    function handlerRight() {
        let slider = document.getElementById('slider');
        slider.style.transform="translate(390px)"
    }

let left = document.getElementById('left');
    left.addEventListener('click', handlerLeft);
    function handlerLeft() {
      let slider = document.getElementById('slider');
      slider.style.transform="translate(${pos + 390}px)"
}