# icon-component

A simple icon component

Built with `fastn.js`

# Usage

## Initialise

var createIcon = require('svg-icon-component')({

        // Function to resolve the url location of an icon.
        resolvePath: function(iconName){

            return 'foo/bar/baz' + iconName + '.svg';

        }

    });

## Settings

```
{
    name: String. iconName passed to resolvePath.
}
```

## Standalone

```
// Create the icon
var icon = createIcon({
        name: 'tick'
    });

// Put the icon's element somewhere in the DOM.
document.body.appendChild(icon.element);
```

## Fastn component

```
var fastn = require('fastn')({
    ... other components...
    icon: require('svg-icon-component/iconComponent')({
        resolvePath: function(iconName){
            return 'foo/bar/baz' + iconName + '.svg'; // Example path
        }
    })
});

var icon = fastn('icon', { options... });
```

icon will attempt to use the `_generic` component provided by fastn.

## Inserting

```
someDomNode.appendChild(icon.element);
```

## Properties

### Name

```
// retrieve value
icon.name(); // returns value of name

// set value
icon.name(newValue); -// returns icon.name property

// watch for changes
icon.name.on('change', function(name){
    // Do something
});
```