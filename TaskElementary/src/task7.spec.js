'use strict';

describe('Task 7. ', function () {

    it('Fibonacci numbers which have length 3', function () {
        expect(task7({length: 3})).toEqual([144, 233, 377, 610, 987]);
    });

    it('Fibonacci numbers from 1 to 30', function () {
        expect(task7({min: 1, max:30})).toEqual([1, 2, 3, 5, 8, 13, 21]);
    });

});