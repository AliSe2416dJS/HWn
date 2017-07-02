'use strict';

function Widget () {
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

    this.getWidgetValue = function () {
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