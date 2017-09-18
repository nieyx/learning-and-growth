var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', ['$scope', function($scope){ 
		$scope.greeting = {
			text: 'Hello'
		};
}]);

bookStoreCtrls.controller('BookListCtrl', ['$scope', function($scope){
		$scope.books = [
			{title: "js权威指南",  author: "大神"},
			{title: "nodejs权威指南",  author: "大神"},
			{title: "angular权威指南",  author: "大神"}
		];
}]);

bookStoreCtrls.controller('LoginCtrl', ['$scope', function($scope){
		$scope.userInfo = {
			email: '123456@qq.com',
			password: '123456',
			autoLogin: true
		};

		$scope.getFormData = function(){
			console.log($scope.userInfo);
		};

		$scope.setFormData = function(){
			$scope.userInfo = {
			email: 'qazxsw@qq.com',
			password: '123456',
			autoLogin: false
		};
		};

		$scope.resetData = function(){
			$scope.userInfo = {
			email: '123456@qq.com',
			password: '123456',
			autoLogin: true
		};
		}
}]);