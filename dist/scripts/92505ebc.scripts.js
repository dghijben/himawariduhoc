"use strict";angular.module("himawariduhocApp",["ngCookies","ngResource","ngSanitize","ui.router"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),a.state("index",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("founders",{url:"/founders",templateUrl:"views/founders.html",controller:"FoundersCtrl"}),c.html5Mode(!0)}]),angular.module("himawariduhocApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("himawariduhocApp").controller("FoundersCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);