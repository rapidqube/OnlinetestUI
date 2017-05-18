import { test } from 'qunit';
import moduleForAcceptance from 'online-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('home page', function (assert) {
  visit('/home');
  andThen(function() {
    assert.equal(currentURL(), '/home');
  });

});

test('should accept Email Id from user', function (assert) {
  visit('/home');
  andThen(function() {
    assert.equal(currentURL(), '/home');
  });

});

test('should accept Password from user', function (assert) {
  visit('/home');
  andThen(function() {
    assert.equal(currentURL(), '/home');
  });

});


