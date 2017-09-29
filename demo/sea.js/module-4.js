define(function(require,exports,module){
    var obj ={};
    obj.num=function(a,b){
        return (+a)+(+b)
    };
    obj.reduce=function(a,b){
        return (+a)-b
    }
    module.exports=obj
})