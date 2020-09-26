

describe('Protractor Demo App', function() {

it('whatever',function(){
  browser.get('http://juliemr.github.io/protractor-demo/');


  element(by.model('first')).sendKeys('7');
  element(by.model('second')).sendKeys('7');
  element(by.id('gobutton')).click();

   browser.sleep(10000)
   
});
    

});