var createIcon = require('../')({
        resolvePath: function(name){
            return name + '.svg'
        }
    }),
    crel = require('crel');

window.onload = function(){

    // Create a icon.
    var icon = createIcon({
        name: 'smiley'
    });

    document.body.appendChild(icon.element);

};