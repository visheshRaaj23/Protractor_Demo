let writeStream = require('fs');
const { browser } = require('protractor');
const { By } = require('selenium-webdriver');
var useDP = require("C:/Users/Vishesh and Varsha/AppData/Roaming/npm/node_modules/jasmine-data-provider");

xdescribe("Angular JS application Test",() =>{

    let empName="Vishesh";

    it('-->One Way Binding',() =>{

        element.manage().timeouts().implicitlyWait(3000);

        element(by.model('yourName')).sendKeys(empName);

        element(by.binding('yourName')).getText().then((text) =>{
            expect(text).toEqual("Hello "+empName+"!");
            expect(text).toContain(empName);
        });
    });
    it('-->Two Way Binding',()=>{
        element(by.model('todolist.todotext')).sendKeys('To Learn Protractor Framework');
        element(by.buttonText('add')).click();

        element.all(by.cssContainingText('li input[type=\"checkbox\"]+span','To Learn Protractor')).count()
        .then(function(noOfElements) {
            console.log("No of matches:"+noOfElements);
            expect(noOfElements).toBe(1);
        });
    });
});

xdescribe('Calculator Application' , () =>{

    let EC = protractor.ExpectedConditions;


    it("Perform Addition Test",async function(){

        var EC = protractor.ExpectedConditions;
            let num1='23';
            let num2='9';
            let operationOutput;
            let operation='*';
            if(operation=='+'){
                operationOutput=parseInt(num1)+parseInt(num2);
            }else if(operation=='-'){
                operationOutput=parseInt(num1)-parseInt(num2);
            }else if(operation=='*'){
                operationOutput=parseInt(num1)*parseInt(num2);
            }else if(operation=='/'){
                operationOutput=parseInt(num1)/parseInt(num2);
                operationOutput=Math.round(operationOutput);
            }else if(operation=='%'){
                operationOutput=parseInt(num1)%parseInt(num2);
            } 
            browser.wait(EC.presenceOf(element(by.model('first')),3*1000,"The Value 1 should be entered"));
       await element(by.model('first')).sendKeys(num1);
       browser.wait(EC.visibilityOf(element(by.model('second')),3*1000,"The Value 1 should be entered"));
       await  element(by.model('second')).sendKeys(num2);
       await element(by.css('select[ng-model="operator"]')).click();
        async function switchType(operationTypeCheck){
        await element(by.cssContainingText('option',operationTypeCheck)).click();
       }
         switchType(operation);
         browser.wait(EC.elementToBeClickable(element(by.buttonText('Go!')),3*1000,"The Value 1 should be entered"));
        await element(by.buttonText('Go!')).click();
        var isFullyLoaded = EC.presenceOf(element(by.xpath('//button/following-sibling::h2')));
        browser.wait(isFullyLoaded,5000,"Please enter the Valid Inputs");
        if(await element(by.xpath('//button/following-sibling::h2')).isDisplayed()){
            await element(by.xpath('//button/following-sibling::h2')).getText().then((text) =>{
                console.log(text);
                console.log(operationOutput.toString());
                expect(text).toEqual(operationOutput.toString());
               // expect(parseInt(text)).toBeNaN();
            });
        }
        browser.takeScreenshot().then(function(img){
            let file = writeStream.createWriteStream("./screenShots/Fullpage.png");
            file.write(Buffer.from(img,"base64"));
            file.end();
        });
        //td:nth-child(2);1 and 3
        let latestHistory=element.all(by.xpath('//tbody/tr[1]/td'));
        console.log("Count:"+await latestHistory.count());
        console.log("Time--->"+await latestHistory.get(0).getText());
         expect(await latestHistory.get(1).getText()).toEqual(num1.concat(' ').concat(operation).concat(' ').concat(num2));
        expect(parseInt(await latestHistory.get(2).getText())).toEqual(operationOutput);

/*
        let elem = element(by.id('top'));
        expect(elem.isDisplayed()).toBe(true);

        expect(element(by.binding('person.name')).isPresent()).toBe(true);
        expect(element(by.id('top')).isEnabled()).toBe(false);

        <ul class="items">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        </ul>
        let listOfElem = element.all(by.css('.items li'));
        expect(listOfElem.count()).toBe(3);
        let first=listOfElem.first();
        let last = listOfElem.last();
        expect(listOfElem.get(1).getText()).toBe('First');
        expect(first.getText()).toEqual('First');
        expect(last.getText()).toEqual('Third');

        expect(element(by.css(.items)).isPresent()).toBeTruthy();

        element.all(by.css('.items li')).each(function(listElem){
            listElem.getText().then((text) =>{
                console.log(text);
            })
        })

        browser.manage().timeouts().implicitlyWait(3000);
        var EC = protractor.ExpectedConditions;

        var isElementClickable = EC.elementToBeClickable(button);

        browser.wait(isElementClickable,5000,'exception message to be displayed if the condition fails after 5 seconds');

        //Radio Buttons 

        radioButton = element(by.xpath('//*[@id='radio3']'))

        if(!radioButton.isSelected()){
            radioButton.click();
        }

        if(!radioButton.getAttribute("checked")){
            radioButton.click();
        }

        //CheckBoxes
        checkBox = element(by.id("ct100_ct100_body_cph_Deposit_chkNewTransfer"));
        if(!checkBox.isSelected()){
            checkBox.click();
        }
        if(!checkBox.getAttribute('checked')){
            checkBox.click();
        }


*/
    });
});

xdescribe('Angular JS Application',() =>{
    it('-->Navigation Pane',async () =>{
        let option="14 - Animations";
       await element.all(by.repeater("navItem in navGroup.navItems")).each(function(list){
          let actOptLink=list.element(by.tagName('a'));
           actOptLink.getText().then((text) =>{
               if(text.includes(option)){
                actOptLink.click();
                browser.getTitle().then((title)=>{
                    console.log("Title of the Page is:"+title);
                })
               }
           })
          
        });
    })
});

xdescribe("Browser Window Handling",function(){

    it("Browser Window Operation",async function(){
            
       await element(by.xpath("//a[@class='button button-large button-primary has-shield has-shadow']")).click();
            await browser.getTitle().then((title0) =>{
                console.log(title0);
            });
             var windowsObj=browser.getAllWindowHandles();
             windowsObj.then(function(handles){
                var parentWindow = handles[0];
                var childWindow = handles[1];
                browser.switchTo().window(childWindow);
                browser.sleep(3000);
                browser.switchTo().window(parentWindow);
                browser.sleep(3000);
             });
               
    });
});

xdescribe("Angular JS application",() =>{

    it("-->Mouse Action",async function() {

       await element(by.xpath("//a[contains(text(),'Learn')]")).click();

      await browser.actions().mouseDown().perform().then(function(){
        element(by.linkText("FAQ")).click().then(function(){
            browser.getTitle().then((title) =>{
                console.log(title);
            });
        })
      });
      browser.sleep(3000);
    });
});

xdescribe('Javascript  executor', function(){

    xit('scroll into view and click',async function(){
        var home_footer=await element(by.css('.vl-footer-2 ul li:nth-child(1) a'));
        browser.executeScript("arguments[0].scrollIntoView()",home_footer);
        browser.sleep(3000);
        browser.executeScript("arguments[0].click",home_footer);

    });

    xit('Get Text from the navigation bar',function(){
        browser.executeScript("return $('.dropdown-toggle').eq(0).text();").then(function(text){
                console.log(text);
        });


    });
    xit('Async Execution demo', function(){
        var startTime = new Date().getTime();

        browser.executeAsyncScript("window.setTimeout(arguments[arguments.length-1],3000);").then(function(){
            console.log("Elapsed Time-->"+((new Date().getTime()-startTime)/1000)+' Seconds');
        });
    });

    it('Google Auto-Suggestion',async () =>{
            // browser.restart();
            // browser.ignoreSynchronization = true;
            // browser.waitForAngularEnabled(false);
            // browser.get("https://www.google.com/");
            // browser.manage().window().maximize();
            // browser.manage().timeouts().implicitlyWait(3000);
             browser.waitForAngularEnabled(false);
            var input = "Infosys";
           //await element(by.name('q')).sendKeys(input);

           browser.actions().mouseMove(element(by.name('q')).sendKeys(input)).perform().then(async function(){
              var elementsPresent =  await element.all(by.xpath("//span[contains(translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'"+input+"')]/child::b"));
              console.log(await elementsPresent.length);
              for(var i=0;i<1;i++){
                    browser.actions().sendKeys(protractor.Key.DOWN).perform();
              }
              browser.actions().sendKeys(protractor.Key.ENTER).perform();
           })
           //span[contains(text(),'infosys')]/child::b
        //    var EC = protractor.ExpectedConditions;
        //    browser.wait(EC.visibilityOf(element(by.xpath("//span[contains(text(),'"+input+"')]/child::b")),3*1000,"The Value 1 should be Clicked"));
            //     browser.sleep(2000);
            //      browser.waitForAngularEnabled(false);
            //           var EC = protractor.ExpectedConditions;
            // browser.wait(EC.visibilityOf(element(by.xpath("//span[contains(text(),'"+input+"')]/child::b")),3*1000,"The Value 1 should be Clicked"));
            await element.all(by.xpath("//span[contains(translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'"+input+"')]/child::b")).each(function(elements) {
            console.log(elements.length);
           
           });
    });

});
    describe('Calculator app test with data-provider',() =>{
        useDP([{input1:10,input2:20}],async function(data){
        it('Add 2 numbers',async function(){
            console.log(data.input1);
            console.log(data.input2);
            browser.sleep(2000);
             await browser.driver.findElement(By.xpath("//input[@ng-model='first']")).click();
              await browser.driver.findElement(By.xpath("//input[@ng-model='first']")).sendKeys(data.input1);
              browser.sleep(2000);
              browser.waitForAngularEnabled(true);
               await browser.driver.findElement(By.xpath("//input[@ng-model='second']")).click();
             await browser.driver.findElement(By.xpath("//input[@ng-model='second']").sendKeys(data.input2));
               await browser.driver.findElement(By.id("gobutton")).click();
                });
        });
});
