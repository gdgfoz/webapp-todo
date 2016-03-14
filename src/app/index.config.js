(function() {
  'use strict';

  angular
    .module('webappTodo')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, BASE_URL, OAuthProvider,
    OAuthTokenProvider) {

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    OAuthProvider.configure({
      baseUrl: BASE_URL,
      clientId: 'android_code_lab_1',
      clientSecret: '2cn45h6df9ak67bdsfa72',
      grantPath: '/oauth/access_token',
      revokePath: '/oauth/revoke'
    });

    OAuthTokenProvider.configure({
      name: 'webapptodo',
      options: {
        secure: false
      }
    });
  }

})();
