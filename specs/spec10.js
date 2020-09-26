describe('Protractor Demo App', function() {
    function add(a,b){

      element(by.model('first')).sendKeys(a);
      element(by.model('second')).sendKeys(b);
      element(by.id('gobutton')).click();
    };


    it('whatever',function(){
      browser.get('http://juliemr.github.io/protractor-demo/');

      add(5,8);
      add(3,9);
      add(1,7);

    
    

    



      element.all(by.repeater('result in memory')).each(function(answer){

        answer.element(by.css("td:nth-child(3)")).getText().then(function(result){
            console.log(result);
        })
      });
    
      element.all(by.repeater('result in memory')).get(2).element(by.css("td:nth-child(3)")).getText().then(function(result){

        console.log(result);
      })
       
    });
        
    
    });