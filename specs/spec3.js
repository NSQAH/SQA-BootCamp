

describe('Protractor Demo App', function() {

    it('whatever',function(){
      browser.get('http://juliemr.github.io/protractor-demo/');
    
    
      element(by.model('first')).sendKeys('3');
      element(by.model('second')).sendKeys('7')
      element(by.id('gobutton')).click();

      element(by.css("h2[class='ng-binding']")).getText().then(function(result){
          console.log(result);
      })
      
       
    });
        
    
    });