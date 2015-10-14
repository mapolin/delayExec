/*
    Helper method for delayed execution of code

    Usage:

    DelayExec('name', function() {
        // function body
    }, DELAY_IN_MS);

    @delay: default -> 20
*/

(function(window, document) {

    "use strict";

    // define DelayExec helper
    window['DelayExec'] = function(name, callback, delay, scope) {
        window._delayExec_instances = window._delayExec_instances || {};

        if(!name || !callback) {
            console.warn('No {name} and/or {callback} passed to DelayExec. Exiting...');
            return;
        }

        if(!window._delayExec_instances[name]) {
            var _delay = delay || 20;
            var scope = scope || window;
            return window._delayExec_instances[name] = setTimeout(function() {
                callback.call(scope);
                delete window._delayExec_instances[name];
            }, delay);
        } else {
            clearTimeout(window._delayExec_instances[name]);
            delete window._delayExec_instances[name];
            return window.DelayExec(name, callback, delay, scope);
        }
    };

})(window, document);
