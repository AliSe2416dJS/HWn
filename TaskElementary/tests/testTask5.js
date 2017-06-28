'use strict';

QUnit.test( "hello test5", assert => assert.ok( 1 == "1", "Passed!" ));

QUnit.test( "Task5. Total quantity of lucky tickets by SIMPLE method", function (assert) {
  assert.ok( task5(context).simpleMethod === 55252, "Passed!" );
});

QUnit.test( "Task5. Total quantity of lucky tickets by COMPLICATED method", function (assert) {
  assert.ok( task5(context).complicatedMethod === 25081, "Passed!" );
});