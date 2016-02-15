var cpjax = require('cpjax'),
    iconCache = {};

module.exports = function(options){

    if(!options){
        throw 'iconComponent must be initialised with options';
    }
    if(!options.resolvePath){
        throw 'iconComponent must be passed a resolvePath function in options';
    }

    return function(fastn, component, type, settings, children){
        settings.tagName = 'i';

        component.extend('_generic', settings, children);

        function setImage(svg){
            if(!component.element){ // Componant has been destroyed
                return;
            }

            component.element.innerHTML = svg;
        }

        function updateName(){
            var name = component.name();

            if(!component.element || !name){
                return;
            }

            var path = options.resolvePath(name);

            if(path in iconCache){
                if(typeof iconCache[path] === 'function'){
                    iconCache[path](setImage);
                }else{
                    setImage(iconCache[path]);
                }
                return;
            }

            iconCache[path] = function(callback){
                iconCache[path].callbacks.push(callback);
            };
            iconCache[path].callbacks = [];
            iconCache[path](setImage);

            cpjax(options.resolvePath(name), function(error, svg){
                if(error){
                    setImage(null);
                    return;
                }

                iconCache[path].callbacks.forEach(function(callback){
                    callback(svg);
                });

                iconCache[path] = svg;
            });
        }

        component.setProperty('name', fastn.property('', updateName));

        return component;
    };
};

module.exports.expectedComponents = ['_generic'];