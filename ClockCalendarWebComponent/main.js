'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init () {
    let clock, container;

    document.registerElement('clock-c', Clock);
    clock = document.createElement('clock-c');

    container = document.querySelector('.ClockCalendar');
    container.appendChild(clock);
}