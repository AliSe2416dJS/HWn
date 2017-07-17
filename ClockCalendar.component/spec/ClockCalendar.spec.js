'use strict';

describe('Given the Clock/Calendar', function () {
    var clock = new ClockCalendar();

    it('Should contain a switchMode method', function () {
        expect(clock.switchMode).toBeDefined();
    });

    it('Should contain a switchFormat method', function () {
        expect(clock.switchFormat).toBeDefined();
    });

    it('Should contain a now method', function () {
        expect(clock.now).toBeDefined();
    });

    it('Should add 0 to the digit', function () {
        expect(clock._toTwoDigits(8)).toBe('08');
    });

    describe('When I get "now"', function () {
        afterEach(function() {
            clock._dateFormat = 'eu-date';
            clock._timeFormat = 'short';
            clock._mode = 'calendar';
        });

        it('Should return current time', function () {
            var _now = new Date(),
                hh = clock._toTwoDigits(_now.getHours()),
                mm = clock._toTwoDigits(_now.getMinutes()),
                ss = clock._toTwoDigits(_now.getSeconds()),
                currentTime;

            clock.switchMode();
            clock.switchFormat();
            currentTime = `${hh}:${mm}:${ss}`;

            expect(clock.now).toBe(currentTime);
        });

        it('Should return current date', function () {
            var _now = new Date(),
                dd = clock._toTwoDigits(_now.getDate()),
                mm = clock._toTwoDigits(_now.getMonth() + 1),
                yyyy = _now.getFullYear(),
                currentDate;

            clock.switchFormat();
            currentDate = `${dd}.${mm}.${yyyy}`;

            expect(clock.now).toBe(currentDate);
        });
    });
});
