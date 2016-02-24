(function() {
  'use strict';

  angular
    .module('gdgfoz.core')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider) {

    $httpProvider.interceptors.push('w3HttpInterceptor');
    //$httpProvider.defaults.useXDomain = true;
    //$httpProvider.defaults.withCredentials = true;
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];

  }

})();
