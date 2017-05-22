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

test('should show home101 as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/home101','should redirect automatically');
  });

});


test('should link to home page for login.', function (assert) {
  visit('/');
  console.log("before button");
  click('#LogInbutton');
  andThen(function() {
    assert.equal(currentURL(), '/home','should redirect after clicking log in button.');
  });

});

test('should enter emailid and password in login page.', function (assert) {
  visit('/');
  console.log("before button");
  click('#LogInbutton');
  andThen(function() {
    assert.equal(currentURL(), '/home','should redirect after clicking log in button.');
  });

});




test('should link to register  page .', function (assert) {
  visit('/');
   console.log("sign up button");
   click('#LogInbutton');
  andThen(function() {
    assert.equal(currentURL(), '/home','should redirect after clicking log in button.');
  });
  click('#signupbutton');
  andThen(function() {
    assert.equal(currentURL(), '/register','should redirect after clicking sign up button');
  });

});

test('should link to agreement  page .', function (assert) {
  visit('/');
  
   click('#LogInbutton');
  andThen(function() {
    assert.equal(currentURL(), '/home','should redirect after clicking log in button.');
  });
    
    click('#signinbutton');
  andThen(function() {
    assert.equal(currentURL(), '/agreement','should redirect after clicking sign in button');
  });

});


test('should link to test page for login.', function (assert) {
 visit('/');
 
   click('#LogInbutton');
  andThen(function() {
    assert.equal(currentURL(), '/home','should redirect after clicking log in button.');
  });
    
    click('#signinbutton');
  andThen(function() {
    assert.equal(currentURL(), '/agreement','should redirect after clicking sign in button');
  });

  click('#agreebutton');
  andThen(function() {
    assert.equal(currentURL(), '/test','should redirect after clicking log in button.');
  });

});

  test('should dislpay question and options.', function (assert) {
    visit('/');
    click('#starttest');
    andThen(function () {
      assert.equal(currentURL(),'/programming','should redirect after clicking start test button.');
      });

  });

/*test('should filter the list of rentals by city.', function (assert) {
});

test('should show details for a selected rental', function (assert) {
});*/