const { browser } = require('protractor');
var jasmine2HtmlReporter=require('protractor-jasmine2-html-reporter')

exports.config={
    framework:'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['../specs/proCommerceSpec.js'],
        onPrepare:function(){
            jasmine.getEnv().addReporter(
                new jasmine2HtmlReporter({
                    savePath:'ReportFolder/screenshots'
                })
            )
        }
    
    }
    
