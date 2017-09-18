var MyModule = angular.module('MyModule', []);

// MyModule.controller('myApp', ['$scope', function($scope){
// 	$scope.loadData = function(){
// 		console.log('数据加载中....');
// 	};
// }]);

// MyModule.controller('myApp1', ['$scope', function($scope){
// 	$scope.loadData1 = function(){
// 		console.log('数据加载中111....');
// 	};
// }]);

// MyModule.directive('loader', function(){
// 	return {
// 		restrict: 'AE',
// 		link: function(scope, element, attrs){
// 			element.bind('mouseenter', function(event){
// 				// scope.loadData();
// 				// scope.$apply('loadData()');
// 				scope.$apply(attrs.howtoload);
// 			});
// 		}
// 	};
// });

MyModule.controller('MyApp', ['$scope', function($scope){

}]);

MyModule.directive('superman', function(){
	return {
		scope: {},
		restrict: 'AE',
		controller: function($scope){
			$scope.abilities = [];
			this.addStrength = function(){
				$scope.abilities.push('strength');
			};

			this.addSpeed = function(){
				$scope.abilities.push('speed');
			};

			this.addLight = function(){
				$scope.abilities.push('light');
			};
		},
		link: function(scope, ele, attrs){
			ele.bind("mouseenter", function() {
        console.log(scope.abilities);
      });
		}
	};
});

MyModule.directive('strength', function(){
	return {
		require: '^superman',
		link:function(scope, ele, attrs, supermanCtrl){
			supermanCtrl.addStrength();
		}
	};
});

MyModule.directive('speed', function(){
	return {
		require: '^superman',
		link:function(scope, ele, attrs, supermanCtrl){
			supermanCtrl.addSpeed();
		}
	};
});

MyModule.directive('light', function(){
	return {
		require: '^superman',
		link:function(scope, ele, attrs, supermanCtrl){
			supermanCtrl.addLight();
		}
	};
});