import { test } from 'qunit';
import moduleForAcceptance from 'online-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test');

test('visiting /test', function(assert) {
   visit('/test');
  test('should select test-type', function(assert) {
  visit('/test');
  
  andThen(function() {
   assert.equal(currentURL(), '/test');
     //assert.equal(currentURL(), '/');
  });
});

/*test('shouild show list of test and redirect to that test', function (assert) {
});*/

/*test('select-component dropdowntype.listitem',function(assert){
  visit('/test');
  fillIn('select-component dropdowntype.listitem',"JAVA");
  
  click('button.Start Test');

  andThen(function(){

console.log("test value get selected....");  
  
  });*/
});
