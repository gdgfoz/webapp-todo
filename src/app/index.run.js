(function() {
  'use strict';

  angular
    .module('webappTodo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.info('Run block webtodo');
  }

})();
