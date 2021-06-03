const { browser } = require('protractor');
var homePageObj = require('../pageObjects/HomePagePO.js');
var navigationPage = require('../pageObjects/TutorialPO.js');
var phoneGalleryObj = require('../pageObjects/PhoneGallery.js');

describe('Angular JS application',function(){

    it("-->One way Binding",function(){
            var pageRef = homePageObj.oneWayBinding;

            pageRef.nameFiled().sendKeys(pageRef.name);

            pageRef.boundField().getText().then(function(text){
                expect(text).toContain(pageRef.input);
            });
    });

    it("-->Two way Binding",function(){
        var pageRef = homePageObj.twoWayBinding;
        pageRef.inputField().sendKeys(pageRef.toDoTaskInput);
        pageRef.addField().click();
        let index=0;
        let toDoListItem=[];
        pageRef.toDoListField().each(function(listOfItems){
            listOfItems.getText().then(function(text){
                    toDoListItem[index]=text;
                    index+=1;
            });
        }).then(function(){
            expect(toDoListItem).toContain(pageRef.toDoTaskInput);
        })
    });

    it("Navigation Pane",function(){
        var pageRf1 = navigationPage;

        pageRf1.learnLink().click();
        pageRf1.tutorialLink().click();

        pageRf1.leftPane().each(function(option){
            let elem = pageRf1.getLinksInPane(option);

            elem.getText().then(function(text){
                if(text.includes(pageRf1.toClick)){
                    elem.click();
                    browser.getTitle().then(function(title){
                        console.log("Title of the Page:"+title);
                        expect(text.includes("Animation")).toBeTruthy();
                        browser.sleep(3000);
                    });
                }
            });


        });
        pageRf1.nextPageLink().click();
    });

    it("Search a Phone Model",function(){
        let totalMatch = 0;
        var pageRef = phoneGalleryObj.searchItem;
        browser.sleep(3000);
        let phones = pageRef.listOfItems();
        phones.each(function(option){
            let link = pageRef.listLink(option);
            link.getText().then(function(text){
                console.log("Module Name:"+String(text));
                text = String(text).toUpperCase();
                if(text.includes(pageRef.searchFor().toUpperCase())){
                    totalMatch+=1;
                }
            });
        });

        //Validating the search function by comparing the results
        //Please replace the logic if required
        pageRef.searchField().sendKeys(pageRef.searchFor()).then(function(){
                console.log("The total Match",totalMatch);
                pageRef.listOfItems().then(function(items){
                    console.log("Search Match:"+items.length);
                    expect(totalMatch).toEqual(items.length);
                });
        });

    });
});