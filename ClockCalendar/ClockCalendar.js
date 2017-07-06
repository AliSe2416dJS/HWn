'use strict';

class ClockCalendar {
    constructor () {
        this._now = new Date();
        this._dateFormat = 'ua-date';
        this._timeFormat = 'full';
        this._mode = 'clock';
    }

    start () {
        setInterval(() => this._now = new Date, 1000);
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

    get now () {
        return (this._mode === 'clock') ? this._getTime() : this._getDate();
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


/*
function ClockCalendar () {
    let now = new Date(),
        dateFormat = 'ua-date',
        timeFormat = 'full',
        mode = 'clock';

    setInterval(() => now = new Date, 1000);

    this.switchMode = function () {
        mode = (mode === 'clock') ? 'calendar' : 'clock';
    };

    this.switchFormat = function () {
        if (mode === 'calendar') {
            dateFormat = (dateFormat === 'ua-date') ? 'eu-date' : 'ua-date';
        } else {
            timeFormat = (timeFormat === 'full') ? 'short' : 'full';
        }
    };

    this.getClockCalendarValue = function () {
        return (mode === 'clock') ? getTime() : getDate();
    };

    function getTime () {
        let hh = toTwoDigits(now.getHours()),
            mm = toTwoDigits(now.getMinutes()),
            ss = toTwoDigits(now.getSeconds());

        return (timeFormat === 'full') ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`;
    }

    function getDate () {
        let dd, mm, yy, yyyy;

        dd = toTwoDigits(now.getDate());
        mm = toTwoDigits(now.getMonth() + 1);
        yyyy = now.getFullYear();
        yy = +yyyy.toString().slice(2);

        return (dateFormat === 'ua-date') ? `${dd}.${mm}.${yyyy}` : `${mm}/${dd}/${yy}`;
    }

    function toTwoDigits (nn) {
        return (nn < 10) ? '0' + nn : nn;
    }

    return this;
}
*/