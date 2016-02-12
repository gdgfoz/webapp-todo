(function() {
  'use strict';

  angular
    .module('webappTodo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
