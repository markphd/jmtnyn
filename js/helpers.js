(function($) {

    function inflectNumber(str, num) {
        var i = num === 1 ? 0 : 1;
        str = str.replace(/\${num}/g, num);
        return str.replace((/{(.[^}]*)}/g), function(match, values) {
            return values.split('|')[i];
        });
    }

    $.fn.wru = function(color) {

        console.group('$("'+this.selector+'").wru() says:');

        var numberOfElements = this.length;
        console.log(inflectNumber(
            'There {is|are} ${num} element{|s} in the jQuery collection.',
            numberOfElements
        ));

        if (numberOfElements) {
            console.group(inflectNumber('\nThe element{|s}:', numberOfElements));
            this.each(console.log.bind(console));
            console.groupEnd();
        }

        console.group('\nThe jQuery collection:');
        console.log(this);
        console.groupEnd();

        console.groupEnd();

        color = color || '#d6393d';
        return this.css('outline', '2px solid ' + color);
    };

    $.fn.on = (function(oldOn) {
        return function() {
            if (!this.length) {
                console.group('Event handler(s) not working?');
                console.log('%cYou called the .on method on an empty collection.', 'color: red; font-style: italic;');
                console.log('%cMake sure your selector is correct: $("%s")', 'color: red; font-style: italic;', this.selector);
                console.groupEnd()
            }
            return oldOn.apply(this, arguments);
        };
    }($.fn.on));

}(jQuery));
