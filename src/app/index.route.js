(function() {
  'use strict';

  angular
    .module('webappTodo')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'app/auth/login.html'
        //controller: 'MainController',
        //controllerAs: 'main'
      })
      .when('/singup', {
        templateUrl: 'app/auth/singup.html'
        //controller: 'MainController',
        //controllerAs: 'main'
      })
      .when('/remind', {
        templateUrl: 'app/auth/remind.html'
        //controller: 'MainController',
        //controllerAs: 'main'
      })
      .when('/todo', {
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoController',
        controllerAs: 'todo'
      })
      .otherwise({
        redirectTo: '/todo'
      });
  }

})();
