var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', ['$scope', function($scope){
	$scope.loadData = function(){
		console.log('加载数据中');
	};
}]);

myApp.controller('myCtrl2', ['$scope', function($scope){
	$scope.loadData2 = function(){
		console.log('加载数据中,222');
	};
}]); 

myApp.directive('loader', function(){
	return {
		restrict: 'AE',
		link: function(scope, element, attrs){
			element.bind('mouseenter', function(){
				// scope.loadData();
				scope.$apply(attrs.howToLoad);
			});
		}
	};
});