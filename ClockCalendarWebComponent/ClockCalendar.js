'use strict';

class Clock extends HTMLElement {
    constructor () {
        super();

        this._dateFormat = 'ua-date';
        this._timeFormat = 'full';
        this._mode = 'clock';
        this._now = new Date();
    }

    createdCallback () {
        this.start();

        this.addEventListener('mouseover', () => document.querySelector('.ClockCalendar').classList.toggle('hovered'), false);
        this.addEventListener('mouseover', () => document.querySelector('.ClockCalendar').classList.toggle('hovered'), false);
        this.addEventListener('click', this.switchFormat(), false); 
        this.addEventListener('contextmenu', e => {
            e.preventDefault();
            this.switchMode();
            this.innerHTML = this.now;
        }, false);
    }

    start () {
        setInterval(() => {
            this._now = new Date();
            console.log(this.now);
            this.innerHTML = this.now;
        }, 1000);
    }

    get now () {
        return (this._mode === 'clock') ? this._getTime() : this._getDate();
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