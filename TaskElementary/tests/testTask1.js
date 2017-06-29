'use strict';

QUnit.test('Task1. Chess board. width = 5, height = 4', function (assert) {
    let width = 5,
        height = 4,
        character = '*';

    assert.ok(task1(width, height, character).length === (width * 2 + 3) * height, 'String Length = 52. Passed!');
});

QUnit.test('Task1. Chess board. width = 3, height = 3', function (assert) {
    let width = 3,
        height = 3,
        character = '*';

    assert.ok(task1(width, height, character).length === (width * 2 + 3) * height, 'String Length = 27. Passed!');
});