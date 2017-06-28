'use strict';

QUnit.test("Task6. Sequence of 5 numbers, square of first not less than 100", function (assert) {
  assert.ok(task6(5, 100) === '10, 11, 12, 13, 14', '10, 11, 12, 13, 14 - Passed!');
});

QUnit.test("Task6. Sequence of 4 numbers, square of first not less than 0", function (assert) {
  assert.ok(task6(4, 0) === '0, 1, 2, 3', '0, 1, 2, 3 - Passed!');
});
