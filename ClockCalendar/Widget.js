'use strict';

function Widget () {
    let dateFormat = 'ua-date',
        timeFormat = 'full',
        mode = 'clock';

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
        let currentTime = new Date(),
            hh = toTwoDigits(currentTime.getHours()),
            mm = toTwoDigits(currentTime.getMinutes()),
            ss = toTwoDigits(currentTime.getSeconds());

        return (timeFormat === 'full') ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`;
    }

    function getDate () {
        let currentDate = new Date(),
            dd, mm, yy, yyyy;

        dd = toTwoDigits(currentDate.getDate());
        mm = toTwoDigits(currentDate.getMonth() + 1);
        yyyy = currentDate.getFullYear();
        yy = +yyyy.toString().slice(2);

        return (dateFormat === 'ua-date') ? `${dd}.${mm}.${yyyy}` : `${mm}/${dd}/${yy}`;
    }

    function toTwoDigits (nn) {
        return (nn < 10) ? '0' + nn : nn;
    }

    return this;
}