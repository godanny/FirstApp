require([], function() {
  'use strict';

  return ['$scope', function($scope){
    console.log('main app controller');
    $scope.heading = ''
  }]
});