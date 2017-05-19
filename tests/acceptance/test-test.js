import { test } from 'qunit';
import moduleForAcceptance from 'online-test/tests/helpers/module-for-acceptance';
//import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';
moduleForAcceptance('Acceptance | test');

/*test('visiting /test', function(assert) {
   visit('/test');
  test(' select test-type', function(assert) {
  visit('/test');
  
  andThen(function() {
   assert.equal(currentURL(), '/test');
     //assert.equal(currentURL(), '/');
  });
});

/*test('shouild show list of test and redirect to that test', function (assert) {
});*/

/*test('visiting /test',function(assert){
  visit('/test');
  fillIn('.select-component dropdown','testlist');
  
  click('button.Start Test');

  andThen(function(){
 assert.equal(currentURL(), '/test');
 console.log("test value get selected....");  
  
  });
});*/


test('home page', function (assert) {
  visit('/home');   
  andThen(function() {
    assert.equal(currentURL(), '/home');
  });

});

test('agreement page', function (assert) {
   visit('/agreement');
  andThen(function() {
    assert.equal(currentURL(), '/agreement');
  });

});

test('test page', function (assert) {
  visit('/test');
  andThen(function() {
    assert.equal(currentURL(), '/test');
  });

});

test('should select test-type', function (assert) {
  visit('/test');
  andThen(function() {
    assert.equal(currentURL(), '/test');
  });

});

