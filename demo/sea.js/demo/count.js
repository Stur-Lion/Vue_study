define(function(require,exports,module){
    function Count(){
        this.count_val1 = document.getElementById('count_val1')
        this.count_select = document.getElementById('count_select')
        this.count_val2 = document.getElementById('count_val2')
        this.count_btn = document.getElementById('count_btn')
        this.count_result = document.getElementById('count_result')
    }
    //初始化方法
    Count.prototype.innit=function(){
        var that = this,result=0;

        this.count_btn.onclick=function(){
            var a = that.count_val1.value,b=that.count_val2.value;
            console.log(that.count_select.value);
            switch (that.count_select.value){
                case '1':result = that.sum(a,b);break;
                case '2':result = that.reduce(a,b);break;
                case '3':result = that.cheng(a,b);break;
                case '4':result = that.chu(a,b);break;
            }
            console.log(result);
            that.count_result.innerHTML = result
        }
    }
    //其他方法
    Count.prototype.sum=function(a,b){
        return (+a)+(+b)
    }
    Count.prototype.reduce=function(a,b){
        return a-b
    }
    Count.prototype.cheng=function(a,b){
        return (+a)*b
    }
    Count.prototype.chu=function(a,b){
        return a/b
    }


    module.exports = Count
})