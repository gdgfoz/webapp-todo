(function() {
  'use strict';

  angular
    .module('webappTodo')
    .controller('TodoController', TodoController)
    .controller('LeftCtrl', LeftCtrl)
    .controller('RightCtrl', RightCtrl);

  /** @ngInject */
  function TodoController($scope,  $mdSidenav) {
    var vm = this;
    vm.categorias = [];
    vm.isFavorite = true;

    vm.categorias =[
      {nome: 'cat 1', id: 1},
      {nome: 'cat 2', id: 2},
      {nome: 'cat 3', id: 3},
      {nome: 'cat 4', id: 4}
    ]
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    activate();

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
          });
      }
    }

    function activate() {

    }


  };
   function LeftCtrl ($scope, $mdSidenav) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
        });

    };
  }
  function RightCtrl ($scope, $mdSidenav) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
        });
    };
  }
})();
