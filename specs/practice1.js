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

            practicePage1.name(dataSet.name);
            practicePage1.email(dataSet.email);
            practicePage1.password(dataSet.password);
            practicePage1.enableCheckbox();
            practicePage1.selectGender(dataSet.gender);
            practicePage1.employmentStatus(dataSet.eStatus);
            practicePage1.enterBirthday(dataSet.bday);
            practicePage1.clickSubmitButton();
            practicePage1.assertSuccessMessage(dataSet.successMessage);
            practicePage1.clickShop();
            practicePage1.clickFirstAdd();
            practicePage1.clickFirstAdd2();
            practicePage1.assertCheckout();
            browser.sleep(10000)
      
        });

    });
    
});
  
  