var myModule = angular.module('myModule', []);

// myModule.directive('hello', function(){
// 	// 没有独立的scope，改变其中任何一个，相关联的都会改变
// 	return {
// 		restrict: 'AE',
// 		template:'<div><input type="text" ng-model="usename"/> {{usename}}</div>',
// 		replace: true
// 	};
// });

myModule.directive('hello', function(){
	// 没有独立的scope，改变其中任何一个，相关联的都会改变
	return {
		restrict: 'AE',
		scope: {},	
		template:'<div><input type="text" ng-model="usename"/> {{usename}}</div>',
		replace: true
	};
});