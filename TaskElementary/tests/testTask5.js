'use strict';

QUnit.test( 'Task5. Total quantity of lucky tickets by SIMPLE method', function (assert) {
    let context = {
        min: '000000', 
        max: '999999'
    };
    
    assert.ok( task5(context).simpleMethod === 55252, 'is 55252. Passed!');
});

QUnit.test( 'Task5. Total quantity of lucky tickets by COMPLICATED method', function (assert) {
    let context = {
        min: '000000', 
        max: '999999'
    };
    
    assert.ok( task5(context).complicatedMethod === 25081, 'is 25081. Passed!');
});