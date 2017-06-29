'use strict';

QUnit.test('Task3. Sorting of triangles', function (assert) {
    let triangleList1 = [{
            vertices: 'ABC',
            a: 10.1,
            b: 20,
            c: 22
        },{
            vertices: 'DEF',
            a: 1,
            b: 2.8,
            c: 2
        },{
            vertices: 'GHI',
            a: 110,
            b: 200,
            c: 122.36
        }];

    assert.deepEqual(task3(triangleList1), ['GHI', 'ABC', 'DEF'], "The result is ['GHI', 'ABC', 'DEF']. Passed!");
});