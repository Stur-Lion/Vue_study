define(function(require,exports,module){
    var module1 = require('./module-1.js');//引入其他模块
    module1.num()
    var module2= require('./module-2.js')
    module2.num();
    var module4 = require('./module-4.js')
    console.log(module4.num(2, 5));
    console.log(module4.reduce(2, 5))
    function mainShow(){
        console.log('mian');
    }
    exports.mainShow = mainShow;
})