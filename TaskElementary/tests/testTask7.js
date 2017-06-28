'use strict';

QUnit.test("Task7. Fibonacci numbers which have length 3", function (assert) {
  assert.deepEqual(task7({length: 3}), [144, 233, 377, 610, 987], '[144, 233, 377, 610, 987] - Passed!');
});

QUnit.test("Task7. Fibonacci numbers from 1 to 30", function (assert) {
  assert.deepEqual(task7({min: 1, max:30}), [1, 2, 3, 5, 8, 13, 21], '[1, 2, 3, 5, 8, 13, 21] - Passed!');
});
