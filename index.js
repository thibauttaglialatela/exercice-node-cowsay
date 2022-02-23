const wilderInfo = require('./information');
var cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Salut je suis ${wilderInfo.myInfo.name} et je viens du campus ${wilderInfo.myInfo.campus}`,
    e: "oO",
    T: "U "
}));

