const { element, by } = require("protractor");

module.exports={

    oneWayBinding:{
        "nameField":function(){
            return element(by.model("yourName"));
        },
        "input":"Vishesh",
        "boundField":function(){
            return element(by.binding("yourName"));
        }
    },

    twoWayBinding:{
        "inputField":function(){
            return element(by.model("todoList.toToText"));
        },
        "addField":function(){
            return element(by.buttonText("add"));
        },
        "toDoListField":function(){
            return element.all(by.css("li input[type=\'checkbox'\]+span"));
        }   ,
        "toDoTaskInput":"To Learn Protractor"
    }
};