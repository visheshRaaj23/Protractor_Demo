var useDP = require("jasmine-data-provider");

var inputs = require("../dataProvider/testData.js");

    describe('Calculator app test with data-provider',() =>{
        useDP(inputs.operands,function(data){
            it('Add 2 numbers',async ()=>{
                browser.waitForAngularEnabled(true);
                browser.sleep(2000);
               await browser.actions().moveToElement(element(By.xpath("//input[1]"))).click().sendKeys(data.input1).perform();
                browser.sleep(2000); 
                await browser.actions().moveToElement(element(By.xpath("//input[2]"))).click().sendKeys(data.input2).perform();
               await element(By.id("gobutton")).click();
            });
    });
});