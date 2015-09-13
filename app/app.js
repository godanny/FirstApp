define(['angular', 'appCtrl', 'deps'], function(angular, appCtrl, deps) {
  'use strict';

  var app = angular.module('cvs', deps);

  // app.controller(appCtrl);

  app.config(['$stateProvider', '$urlRouterProvider',  function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      views : {
        'app-content' : {
          templateUrl: 'views/app-content.html',
          controller: appCtrl
        }
      }
    });

    $urlRouterProvider.otherwise('home/start')

  }]);

  return app;
});