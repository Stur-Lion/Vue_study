define(function(){
    var $ = require('jquery')
    $('#myButton').on('click', function () {
        var $btn = $(this).button('loading')
        // business logic...
        $btn.button('reset')
    })
    window.$=window.jQuery = $
})