const { element } = require("protractor")

module.exports={
    searchItem:{
        "listOfItems":function(){
            return element.all(by.repeater("phone in $ctrl.phones"));
        },
        "searchFor":function(){
            return "samsung";
        },
        "searchField":function(){
            return element(by.model("$ctrl.query"));
        },
        "listLink":function(item){
            return item.element(by.css("a:nth-child(2)"));
        }
    }
}