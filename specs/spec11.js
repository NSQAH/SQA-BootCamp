

describe('Protractor Demo App', function() {
    function add(a,b,o){

      element(by.model('first')).sendKeys(a);
      element.all(by.tagName('option')).each(function(result){
          result.getAttribute('value').then(function(values){
              if(values==o)
              {
                  result.click();

              }
          });
          
         
      });
      element(by.model('second')).sendKeys(b);     

      
      element(by.id('gobutton')).click();
       
    };


    it('whatever',function(){
      browser.get('http://juliemr.github.io/protractor-demo/');

      add(5,8,'MULTIPLICATION');
      add(3,9,'DIVISION');
      add(1,7,'ADDITION');

    element.all(by.tagName('option')).each(function(result){
        result.getAttribute('value').then(function(values){
            console.log(values);
        });
    });
    

    



      element.all(by.repeater('result in memory')).each(function(answer){

        answer.element(by.css("td:nth-child(3)")).getText().then(function(result){
            console.log(result);
        })
      });
    
      
       
    });
        
    
    });