(function() {
  'use strict';

  angular
    .module('webappTodo')
    .config(routeConfig);

  function routeConfig($routeProvider) {

    $routeProvider
      .when('/login', {
        templateUrl: 'app/main/auth/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .when('/singup', {
        templateUrl: 'app/main/auth/singup.html'
        //controller: 'SingupController',
        //controllerAs: 'vm'
      })
      .when('/remind', {
        templateUrl: 'app/main/auth/remind.html'
        //controller: 'RemindController',
        //controllerAs: 'vm'
      })
      .when('/todo', {
        templateUrl: 'app/main/todo/todo.html',
        controller: 'TodoController',
        controllerAs: 'todo'
      })

      .otherwise({
        redirectTo: '/todo'
      });
  }

})();
