import { module, test } from 'qunit';

module('unit/presence-test');

test('is present', function(assert){
  assert.ok($.Velocity.Promise);
});
