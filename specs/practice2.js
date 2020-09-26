var using = require('jasmine-data-provider');
const { browser } = require('protractor');

describe('Practice Website', function() {

    //pages
    var practicePage1 = require ('../pages/practicePage1');

    //data
    var practiceData = require ('../data/practiceData.js');

    using(practiceData.data, function (dataSet, description) {

        it('Submitting ProtoCommerce Screen', function() {

            browser.get('https://rahulshettyacademy.com/angularpractice/');

            practicePage1.clickShop();
            practicePage1.clickFirstAdd();
            practicePage1.clickFirstAdd2();
            practicePage1.clickCheckoutButton();
            practicePage1.clickCheckoutButton2();
            practicePage1.typeCountry("be");
            practicePage1.chooseCountry();
            practicePage1.clickPurchase();
            
            browser.sleep(10000)
      
        });

    });
    
});
  
  