'use strict';

angular.module('himawariduhocApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })
      .state('founders', {
        url: '/founders',
        templateUrl: 'views/founders.html',
        controller: 'FoundersCtrl'
      });
    $locationProvider.html5Mode(true);
  });