const { element } = require("protractor")

module.exports={

    toClick="14 - Animations",
    leftPane:function(){
        return element.all(by.repeater("navItem in navGroup.navItems"));
    },
    getLinksInPane:function(item){
        return item.element(by.tagName("a"));
    },
    learnLink:function(){
        return element(by.linkText("LEARN"));
    },
    tutorialLink:function(){
        return element(by.linkText("Tutorial"));
    },
    nextPageLink: element(by.css("a:nth-child(2) li"))

}