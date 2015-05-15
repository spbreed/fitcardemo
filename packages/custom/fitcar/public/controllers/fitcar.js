'use strict';

/* jshint -W098 */
angular.module('mean.fitcar').controller('FitcarController', ['$scope', 'Global', 'Fitcar',
  function($scope, Global, Fitcar) {
    $scope.global = Global;
    $scope.package = {
      name: 'fitcar'
    };
  }
]);

