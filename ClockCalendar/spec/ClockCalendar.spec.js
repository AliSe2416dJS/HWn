'use strict';

describe('Given ClockCalendar', function () {
    var clock = new ClockCalendar();

    it('Should "now" method to be defined', function () {
        expect(clock.now).toBeDefined();
    });

    it('Should return current time', function () {
        var _now = new Date(),
            hh = _now.getHours(),
            mm = _now.getMinutes(),
            ss = _now.getSeconds(),
            currentTime;

        hh = (hh < 10) ? Number(`0${hh}`) : hh;
        mm = (mm < 10) ? Number(`0${mm}`) : mm;
        ss = (ss < 10) ? Number(`0${ss}`) : ss;

        currentTime = `${hh}:${mm}:${ss}`;

        expect(clock.now).toBe(currentTime);
    });
});