/* global jQuery, Drupal */

'use strict';

(function (global) {


  // ASAP exec
  var $ = global.jQuery;// = require('jquery');

  // Boostrap 4.x require jquery exposed as $ globally
  global.$ = $;

  // Boostrap 4.x dependencies
  global.Popper = require('popper.js');
  global.Tooltip = require('tooltip.js');


  //app modules declarations
  var modules = [];
  modules.push(require('module.template'));

  $(global.document).ready(function () {
    $.each(modules, function (i, module) {
      if (typeof module.ready !== 'undefined') {
        module.ready();
      }
    });
  });

  $(global).on('load',function () {
    $.each(modules, function (i, module) {
      if (typeof module.load !== 'undefined') {
        module.load();
      }
    });
  });

})(window);
