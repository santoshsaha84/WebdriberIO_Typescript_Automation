
var log4js=require('log4js');

log4js.configure({
    appenders:{'file':{type:'file',filename: 'logs/Info.log'}},
    categories: {default:{appenders:['file'],level:'debug'}}

});
var logger=log4js.getLogger('info');
export default logger;