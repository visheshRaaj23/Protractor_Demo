let report = require('jasmine-spec-reporter').SpecReporter;
let allureReporter = require('jasmine-allure-reporter');

exports.config ={
     directConnect: true,
     specs:["demos/demo6ASL.js"],

     suites:{
        homePage:['testScenarios/HomepageSpec.js',''],
        phonePage:['testScenarios/TutorialPageSpec.js','testScenarios/PhoneGalleryPageSpec.js']
    // "test": "protractor config.js --suite homePage,phonePage" in package.json
     },
     capabilities:{
         browserName:'chrome'
        },
         multiCapabilities:[
             {
                 "browserName":"firefox",
                 "shardTestFiles":true,
                 "maxInstances":2
                },
             {
                 "browserName":"chrome"
                }
         ],
        SeleniumAddress:"http//localhost:4444/wd/hub",
        jasmineNodeOpts:{
            defaultTimeoutInterval:30000
        },
        onPrepare:async function(){
            jasmine.getEnv().addReporter(new report({
                displayFailuresSummary:true,
                displayFailuredSpec:true,
                displaySuiteNumber:true,
                displaySpecDuration:true,
                displayPendingSpec:true
            }));
            jasmine.getEnv().addReporter(new allureReporter({
                resultsDir:'allure-results'
            }));
            jasmine.getEnv().afterEach(function(ss){
                browser.takeScreenshot().then(function(png){
                    allure.createAttachment("Screenshot",function(){
                        return Buffer.from(png,"base64");
                    },"image/png")();
                    ss();
                });
            });
            jasmine.getEnv().beforeEach(function(done){
                browser.takeScreenshot().then(function(png){
                    allure.createAttachment('Screenshot',function(){
                        return Buffer.from(png,'base64');
                    },"image/png")();
                    done();
                });
            });
            browser.waitForAngularEnabled(true);
            //browser.get("http://127.0.0.1:5500/app/demo6.html");
            //file:///C:/Users/Vishesh%20and%20Varsha/Desktop/Trainings/JavaScript%20Lex/AngularJS%20Test/app/Demo6.html
            //https://angularjs.org/
            //https://docs.angularjs.org/tutorial
            //http://juliemr.github.io/protractor-demo/
            //http://webdriverjs.com
            //https://www.google.com/
            await browser.navigate().to("http://juliemr.github.io/protractor-demo/");
            browser.manage().window().maximize();
            browser.manage().timeouts().implicitlyWait(7000);    
        }
}

//npm start
//npm init -->to create package.json file.