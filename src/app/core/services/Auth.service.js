(function() {
  'use strict';

    angular
      .module('gdgfoz.core')
      .factory('Auth', authService);

      /** @ngInject */
      function authService(){

        var service = {
          login : login,
          singup: singup,
          check : check
        };

        return service;
        //--------------- Functions

        function check()
        {
            return false;
        }

        function login()
        {
            alert('Logar');
        }


        function singup()
        {

        }

      }


})();
