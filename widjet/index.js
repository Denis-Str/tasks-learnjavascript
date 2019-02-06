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
        }, 1000)
    }

   render () {
        let date = new Date();
        this.hour = date.getHours();
        this.min = date.getMinutes();
        this.sec = date.getSeconds();
        (this.min < 10) ? this.min = '0' + date.getMinutes() : date.getMinutes();
        (this.sec < 10) ? this.sec = '0' + date.getSeconds() : date.getSeconds();
        this.element.innerHTML = `${ this.hour + ':' + this.min + ':' + this.sec  }`;
   }
   stop () {
       let stop = document.getElementById('stop');
       stop.addEventListener('click', ()=> {
           alert('stop')
       });
   }
}

new  Clock(document.getElementById('clock'));
