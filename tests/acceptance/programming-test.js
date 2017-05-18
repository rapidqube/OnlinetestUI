import { test } from 'qunit';
import moduleForAcceptance from 'online-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | programming');

//test('visiting /programming', function(assert) {
   visit('/programming');
  test('should display question and score anh again redirect to test page', function(assert) {
  visit('/programming');
  
  andThen(function() {
   assert.equal(currentURL(), '/programming');
     //assert.equal(currentURL(), '/');
  });
});

//});