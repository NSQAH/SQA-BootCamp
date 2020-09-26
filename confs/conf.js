const { browser } = require("protractor")
var jasmine2HtmlReporter=require('protractor-jasmine2-html-reporter')

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../specs/spec4.js'],
    onPrepare: function(){
        
        jasmine.getEnv().addReporter(
            new jasmine2HtmlReporter({
                savePath:'ReportFolder/screenshots'
            })
        )
        
    }


    
    }