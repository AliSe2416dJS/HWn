'use strict'; 

document.addEventListener('DOMContentLoaded', init, false);

function init () {
    let widget = new Widget(),
        view = new View(widget);

    view.showTime(widget.getWidgetValue());
    setInterval(() => view.refresh(widget.getWidgetValue()), 1000);
}






























/*
function switchMode () {
    let clockCalendarSwitcher = document.querySelector('#clockCalendarSwitcher');

    if (clockCalendarSwitcher.value === 'clock') {
        clockCalendarSwitcher.value = 'calendar';
    } else {
        clockCalendarSwitcher.value = 'clock';
    }

    refresh();
}

function switchFormat () {
    let clockCalendarSwitcher = document.querySelector('#clockCalendarSwitcher');

    if (clockCalendarSwitcher.value === 'clock') {
        let timeFormat = document.querySelector('#timeFormat');

        if (timeFormat.value === 'short') {
            timeFormat.value = 'full';
        } else {
            timeFormat.value = 'short';
        }
    } else {
        let dateFormat = document.querySelector('#dateFormat');

        if (dateFormat.value === 'ua-date') {
            dateFormat.value = 'eu-date';
        } else {
            dateFormat.value = 'ua-date';
        }
    }

    refresh();
}

function getTime () {
    let timeFormat = document.querySelector('#timeFormat'),
        currentTime = new Date(),
        hh = toTwoDigits(currentTime.getHours()),
        mm = toTwoDigits(currentTime.getMinutes()),
        ss = toTwoDigits(currentTime.getSeconds()),
        out;

    if (timeFormat.value === 'full') {
        out = `${hh}:${mm}:${ss}`;
    } else {
        out = `${hh}:${mm}`;
    }

    return out;
}

function getDate () {
    let dateFormat = document.querySelector('#dateFormat'),
        currentDate = new Date(),
        dd, mm, yy, yyyy,
        out;

    dd = toTwoDigits(currentDate.getDate());
    mm = toTwoDigits(currentDate.getMonth() + 1);
    yyyy = currentDate.getFullYear();
    yy = +yyyy.toString().slice(2);

    if (dateFormat.value === 'eu-date') {
        out = `${mm}/${dd}/${yy}`;
    } else {
        out = `${dd}.${mm}.${yyyy}`;
    }

    return out;
}

function toTwoDigits (nn) {
    return (nn < 10) ? '0' + nn : nn;
}
*/