(function() {
  'use strict';

    angular
      .module('gdgfoz.core')
      .factory('Auth', authService);

      /** @ngInject */
      function authService($http, $q, $log, OAuth){

        var token = true;

        var service = {
          login : login,
          singup: singup,
          check : check
        };

        return service;
        //--------------- Functions

        function check()
        {
          return OAuth.isAuthenticated();
        }

        function login(credentials)
        {
          $log.info('Mock auth', credentials);
          token = true;

          return OAuth.getAccessToken(credentials);
          //return $q.resolve(true);
          //Todo remove mock auth

          // var data = {
          //   client_id: 'android_code_lab_1',
          //   client_secret: '2cn45h6df9ak67bdsfa72',
          //   grant_type : 'password',
          //   scope: 'tasks_read,tasks_write,categories_read,categories_write,profile_read'
          // };
          //
          // angular.extend(data, credentials);
          //
          // return $http.post('http://todo.api.gdgfoz.org/api/v1/oauth/access_token', data)
          //             .then(success, error);
          //
          // function success(result){
          //     token = result.data.access_token;
          //     $http.defaults.headers.Authorization = 'Bearer ' + token;
          //     if(token) return true;
          //     return false;
          // }
          //
          // function error(error)
          // {
          //     console.log(error);
          // }

        }


        function singup()
        {

        }

      }


})();
