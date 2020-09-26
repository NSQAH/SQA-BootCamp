const { browser, element } = require("protractor");

describe('Protractor Demo App', function() {

    it('whatever',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com./');
        element(by.name("q")).sendKeys("Hello world");
        browser.sleep(5000);
        element(by.name("btnK")).click();
    






        browser.waitForAngularEnabled(true);
      browser.get('http://juliemr.github.io/protractor-demo/');
    
    
      element(by.model('first')).sendKeys('3');
      element(by.model('second')).sendKeys('7')
      element(by.id('gobutton')).click();

      element(by.css("h2[class='ng-binding']")).getText().then(function(result){
          console.log(result);
      });
      
       
    });
});