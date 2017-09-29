define(function(require,exports,module){
    var module3 = require('./module-3.js')
    module3.show()
    function aaa(){
        console.log(222);
    }
    exports.num = aaa
})