'use strict';

describe('Given the Clock/Calendar', function () {
    var clock = new ClockCalendar();

    it('ClockCalendar contains a switchMode method', function () {
        expect(clock.switchMode).toBeDefined();
    });

    /*it('ClockCalendar contains a switchFormat method', function () {
        expect(clock.switchFormat).toBeDefined();
    });

    it('ClockCalendar contains a now method', function () {
        expect(clock.now).toBeDefined();
    });

    describe('When I get "now"', function () {

        it('Should be the current time', function () {
            var _now = new Date(),
                hh = _now.getHours(),
                mm = _now.getMinutes(),
                currentTime;

            hh = (hh < 10) ? Number(`0${hh}`) : hh;
            mm = (mm < 10) ? Number(`0${mm}`) : mm;
            currentTime = `${hh}:${mm}`;

            expect(clock.now).toBe(currentTime);
        });
    });*/
});
