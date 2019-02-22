//
// function clock() {
//     let date = new Date();
//     let hour = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     (min < 10) ? min = '0' + date.getMinutes() : date.getMinutes();
//     (sec < 10) ? sec = '0' + date.getSeconds() : date.getSeconds();
//     el.innerHTML = `${ hour + ':' + min + ':' + sec  } `;
// }
//
// let el = document.getElementById('clock');
// let stop = document.getElementById('stop');
//
// stop.addEventListener('click', ()=> {
//     alert('stop')
// });
//
// setInterval(() => {
//      clock()
// }, 1000);

class Component {
    constructor (element) {
        this.element = element;
    }
}

class Clock extends Component {

    constructor(element) {
        super(element);
        setInterval( () => {
            this.render()
        }, 1000);
        let  stop = document.getElementById('stop');
        stop.addEventListener('click', () => {
            alert('stop')
        })
    }

    static stop () {
        alert('stop')
    };

   render () {
        let date = new Date();
        this.hour = date.getHours();
        this.min = date.getMinutes();
        this.sec = date.getSeconds();
        (this.min < 10) ? this.min = '0' + date.getMinutes() : date.getMinutes();
        (this.sec < 10) ? this.sec = '0' + date.getSeconds() : date.getSeconds();
        this.element.innerHTML = `${ this.hour + ':' + this.min + ':' + this.sec  }`;
   }
}

new  Clock(document.getElementById('clock'));


class Count {
    constructor (element) {
        this.element = element;
        this.count = 0;
        let up = document.querySelector('.up');
        let down = document.querySelector('.down');

        up.addEventListener('click', () => {
            this.up();
        });
        down.addEventListener('click', () => {
            this.down();
        });
        this.render();
    }

    render() {
        this.element.innerHTML = `${ this.count }`;
    }

    up() {
        ++this.count;
        this.render();
    }
    down() {
        --this.count;
        this.render();
    }
}

new Count(document.querySelector('.vote'));

// let vote = document.querySelector('.vote');
// let up = document.querySelector('.up');
// let down = document.querySelector('.down');
//
// function count(elem, up, down) {
//   let count = 0;
//   up.addEventListener('click', () => {
//     elem.innerHTML = `${ ++count }`;
//   });
//
//   down.addEventListener('click', () => {
//     elem.innerHTML = `${ --count }`;
//   });
// }
// count(vote, up, down);
