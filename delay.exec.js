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
        this._delayExec_instances = this._delayExec_instances || {};

        if(!name || !callback) {
            console.warn('No {name} and/or {callback} passed to DelayExec. Exiting...');
            return;
        }

        if(!this._delayExec_instances[name]) {
            var _delay = delay || 20;
            var scope = scope || this;
            return this._delayExec_instances[name] = setTimeout(function() {
                callback.call(this);
                delete this._delayExec_instances[name];
            }, delay);
        } else {
            clearTimeout(this._delayExec_instances[name]);
            delete this._delayExec_instances[name];
            return this.DelayExec(name, callback, delay, scope);
        }
    };

})(window, document);
