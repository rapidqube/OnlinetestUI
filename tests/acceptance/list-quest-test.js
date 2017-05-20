import { test } from 'qunit';
import moduleForAcceptance from 'online-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list quest');

/*test('visiting /list-quest', function(assert) {
test('visiting /', function(assert) {
  visit('/list-quest');
 visit('/');


  andThen(function() {
    assert.equal(currentURL(), '/list-quest');
    assert.equal(currentURL(), '/');
  });
});
});*/

test('should show instructions as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/instructions','should redirect automatically');
  });

});


test('should link to home page for login.', function (assert) {
  visit('/');
  console.log("before button");
  click('#Instructionbutton');
  andThen(function() {
    assert.equal(currentURL(), '/home','should redirect automatically');
  });

});

test('should link to register  page .', function (assert) {
  visit('/');
  //click('button.Sign In');
 
  click('#signupbutton');
  //click('.btn btn-success');
  andThen(function() {
    assert.equal(currentURL(), '/register','should redirect automatically');
  });

});

test('should link to test  page .', function (assert) {
  visit('/');
  //click('button.Sign In');
 
  click('#signinbutton');
  andThen(function() {
    assert.equal(currentURL(), '/register','should redirect automatically');
  });

});


/*test('should list available rentals.', function (assert) {
});

test('should filter the list of rentals by city.', function (assert) {
});

test('should show details for a selected rental', function (assert) {
});*/