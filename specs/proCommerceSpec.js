var using=require('jasmine-data-provider');
const{browser}=require('protractor');

describe('ProCommerce',function(){

    var ProCommerceData=require("../data/proCommerceData.js");
    var proCommercePage=require("../pages/proCommercePage.js");

    using(ProCommerceData.test,function(test,description){

        it('fill out form',function(){

            browser.get('https://rahulshettyacademy.com/angularpractice/');
            
            proCommercePage.name.sendKeys(test.name);
            proCommercePage.email.sendKeys(test.email);
            proCommercePage.pass.sendKeys(test.pass);
            proCommercePage.check.click();
            proCommercePage.genderm.click();
            proCommercePage.employstatstud.click();
            proCommercePage.dateofbirth.sendKeys(test.dateofbirth);
            proCommercePage.submit.click();
            browser.sleep(10000);
        });
    });
});