require.config({
  deps: ['main.js'],
  waitSeconds: 10,
  paths: {
    '@app' : '.',
    'jquery': 'libs/vendor/jquery/dist/jquery.min',
    'underscore':'libs/vendor/underscore/underscore-min',
    'angular': 'libs/vendor/angular/angular',
    'angularUiRouter': 'libs/vendor/angular-ui-router/release/angular-ui-router.min'
  },
  shim: {
    'jquery' : {
       exports: '$'
     },
     'underscore': {
      exports: '_'
     },
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'angularUiRouter': {
      deps: ['angular']
    }
  }
});

require.onError = function(error){
  'use strict';
  console.log('Error in requireJS model@@->', error);
};

