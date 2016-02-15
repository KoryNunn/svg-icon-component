module.exports = function(options){
    var fastn = require('fastn')({
        _generic: require('fastn/genericComponent'),
        icon: require('./iconComponent')(options)
    });

    return function(settings){
        return fastn('icon', settings).attach().render();
    };
}