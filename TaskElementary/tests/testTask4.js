'use strict';

QUnit.test('Task4. Search of palindrome from 23434743491', function (assert) {
  assert.ok(task4('23434743491') === '4347434', 'The result is 4347434. Passed!');
});

QUnit.test('Task4. Search of palindrome from 12398778900', function (assert) {
  assert.ok(task4('12398778900') === '987789', 'The result is 987789. Passed!');
});

QUnit.test('Task4. Search of palindrome from 23434743491', function (assert) {
  assert.ok(task4('123456') === '0', 'The result is 0. Passed!');
});
