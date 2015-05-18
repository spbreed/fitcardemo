'use strict';

angular.module('mean.fitcar').config(['$stateProvider',
  function($stateProvider) {
      console.log('test');
      $stateProvider.state('fitcar example page1', {
      url: '/fitcar',
      templateUrl: 'fitcar/views/index.html'
    }).state('fitcar receipt page',{
       url: '/receipt',
       templateUrl: 'fitcar/views/receipt.html'
    }).state('fitcar.upload', {
        url: '/upload',
        templateUrl: 'fitcar/views/upload.html'
    }).state('fitcar.rewards', {
        url: '/rewards',
        templateUrl: 'fitcar/views/rewards.html'
    });
  }

]);

//angular.module('mean.goals').config(['$stateProvider',
//    function($stateProvider) {
//
//        $stateProvider.state('goals-page', {
//            url: '/goals-page',
//            templateUrl: 'goals/views/goals-pages/index.html',
//            resolve: {
//                loggedin: checkLoggedin
//            }
//        }).state('goals-page.create',{
//            url: '/create',
//            templateUrl: 'goals/views/goals-pages/create.html',
//            resolve: {
//                loggedin: checkLoggedin
//            }
//        }).state('goals-page.update',{
//            url: '/update/:pageId',
//            templateUrl: 'goals/views/goals-pages/update.html',
//            resolve: {
//                loggedin: checkLoggedin
//            }
//        });
//    }
//]);