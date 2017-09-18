var myModule = angular.module('myModule',[]);

myModule.directive('hello', function(){
	return {
		restrict: 'AEMC',  // a--attr, e--element, m--conment注释,c--class
		// templateUrl: './hello.html', 
		transclude: true,
		template:'<div>hi, everyone <div ng-transclude></div></div>',  // ng-transclude 保留原指令中的内容
		replace: true
	};
});

// 注册器加载完所有的模块时，此方法执行一次
// myModule.run(function($templateCache){
// 	$templateCache.put('hello.html', "<h2>hello everyone</h2>");
// });

// myModule.directive('hello', function(){
// 	return {
// 		restrict: 'AE',
// 		remplate: $templateCache.get('hello.html'),
// 		replace: true
// 	};
// });