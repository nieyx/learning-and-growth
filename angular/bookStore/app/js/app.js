var bookStoreApp = angular.module('bookStoreApp', ['ngRoute', 'ngAnimate', 'bookStoreCtrls']);

bookStoreApp.config(function($routeProvider){
	$routeProvider.when('/hello', {
		templateUrl: 'tpls/hello.html',
		controller: 'HelloCtrl'
	}).when('/list', {
		templateUrl: 'tpls/list.html',
		controller: 'BookListCtrl'
	}).when('/login', {
		templateUrl: 'tpls/login.html',
		controller: 'LoginCtrl'
	}).otherwise({
		redirectTo: '/hello'
	});
});