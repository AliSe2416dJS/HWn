'use strict';

class ClockCalendar extends HTMLElement {
    constructor () {
        super();

        this._dateFormat = 'eu-date';
        this._timeFormat = 'short';
        this._mode = 'calendar';
        this._now = new Date();
        this._nowCash = new Date();
    }

    attachedCallback () {
        let root = this.createShadowRoot(),
            tpl = document.querySelector('#tpl');

        root.appendChild(tpl.content);
        this.start();

        this.addEventListener('mouseover', () => 
            document.querySelector('.ClockCalendar').classList.toggle('hovered'), false);

        this.addEventListener('mouseout',  () => 
            document.querySelector('.ClockCalendar').classList.toggle('hovered'), false);

        this.addEventListener('click', () => {
            this.switchFormat();
            this.refresh();
        }, false); 

        this.addEventListener('contextmenu', e => {
            e.preventDefault();
            this.switchMode();
            this.refresh();
        }, false);
    }

    start () {
      //  this.refresh.();

        setInterval(() => {
            this._now = new Date();
            console.log(this.now);
            this.refresh();
        }, 1000);
    }

    refresh () {
        if (this.now !== this._nowCash) {
            this.innerHTML = this.now;
            this._nowCash = this.now;
            console.log('DOM updated');
        }
    }

    get now () {
        return (this._mode === 'calendar') ? this._getDate() : this._getTime();
    }

    switchMode () {
        this._mode = (this._mode === 'clock') ? 'calendar' : 'clock';
    }

    switchFormat () {
        if (this._mode === 'calendar') {
            this._dateFormat = (this._dateFormat === 'ua-date') ? 'eu-date' : 'ua-date';
        } else {
            this._timeFormat = (this._timeFormat === 'full') ? 'short' : 'full';
        }
    }

    _getTime () {
        let hh = this._toTwoDigits(this._now.getHours()),
            mm = this._toTwoDigits(this._now.getMinutes()),
            ss = this._toTwoDigits(this._now.getSeconds());

        return (this._timeFormat === 'full') ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`;
    }

    _getDate () {
        let dd, mm, yy, yyyy;

        dd = this._toTwoDigits(this._now.getDate());
        mm = this._toTwoDigits(this._now.getMonth() + 1);
        yyyy = this._now.getFullYear();
        yy = +yyyy.toString().slice(2);

        return (this._dateFormat === 'ua-date') ? `${dd}.${mm}.${yyyy}` : `${mm}/${dd}/${yy}`;
    }

    _toTwoDigits (n) {
        return (n < 10) ? '0' + n : n;
    }
}

document.registerElement('clock-calendar', ClockCalendar);