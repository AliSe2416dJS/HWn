'use strict';

QUnit.test('Task2. Envelope analysis. First 5x6, second 2x3.5, the smallest is 2', function (assert) {
    let envelope1 = {a: 5, b: 6},
        envelope2 = {a: 2, b: 3.5};

    assert.ok(task2(envelope1, envelope2) === 2, 'Passed!');
});

QUnit.test('Task2. Envelope analysis. First 2x3.5, second 5x6, the smallest is 1', function (assert) {
    let envelope2 = {a: 5, b: 6},
        envelope1 = {a: 2, b: 3.5};

    assert.ok(task2(envelope1, envelope2) === 1, 'Passed!');
});

QUnit.test('Task2. Envelope analysis. First 2x5, second 2x5, the smallest is 0', function (assert) {
    let envelope1 = {a: 2, b: 5},
        envelope2 = {a: 2, b: 5};

    assert.ok(task2(envelope1, envelope2) === 0, 'Passed!');
});

QUnit.test('Task2. Envelope analysis. First 3x8, second 9x6.5, the smallest is 1', function (assert) {
    let envelope11 = {a: 3, b: 8},
        envelope22 = {a: 9, b: 6.5};

    assert.ok(task2(envelope11, envelope22) === 1, 'Passed!');
});

QUnit.test('Task2. Envelope analysis. First 3x3, second 2x4, the smallest is 0', function (assert) {
    let envelope1 = {a: 3, b: 3},
        envelope2 = {a: 2, b: 4};

    assert.ok(task2(envelope1, envelope2) === 0, 'Passed!');
});
