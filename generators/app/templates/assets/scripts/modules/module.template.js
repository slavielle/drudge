(function(global, $) {
    'use strict';

    var modal = function() {

        function init() {
          alert('module template loaded');
        }

        return {
            ready: init
        };
    }();

    if (typeof module != 'undefined') {
        module.exports = modal;
    }

})(window, window.jQuery);
