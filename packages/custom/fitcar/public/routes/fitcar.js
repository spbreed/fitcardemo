'use strict';

angular.module('mean.fitcar').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('fitcar example page', {
      url: '/fitcar/example',
      templateUrl: 'fitcar/views/index.html'
    });
  }
]);

