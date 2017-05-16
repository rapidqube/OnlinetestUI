import { test } from 'qunit';
import moduleForAcceptance from 'online-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/home');
test('should add Email Id and Password', function(assert){
  visit('/home');
  andThen(function() {
assert.equal(currentURL(), '/home');
});
});
});
test('should redirect to agreenment page after signin', function(assert){
  visit('/agreement')
  click(button.signin)
  andThen(function(){
    assert.equal(currentURL(), '/agreement')
  });
});