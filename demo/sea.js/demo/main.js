define(function(require,exports,module){
    var counts = require('./count.js')
    var count = new counts();
    count.innit()
    var $=require("jquery")
    console.log($);
    console.log($('.count_box'));
})