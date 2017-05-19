import { test } from 'qunit';
import moduleForAcceptance from 'online-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | programming');


  test('programming page', function (assert) {
  visit('/programming');
  andThen(function() {
    assert.equal(currentURL(), '/programming');
  });

});

test('should calculate score after clicking on button ', function (assert) {
  visit('/programming');
  click('button.Calculate Score')
  andThen(function() {
    assert.equal(currentURL(), '/programming');
  });

});

