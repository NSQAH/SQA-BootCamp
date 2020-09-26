const { browser } = require("protractor");

describe('angularjs homepage', function() {
    it('should greet the named user', function() {
      // Load the AngularJS homepage.
      browser.get('http://www.angularjs.org');
      browser.sleep(10000);
    });
});
  
      
  