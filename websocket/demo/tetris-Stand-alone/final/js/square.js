var Square = function(){
	// 方块的数据
	this.data = [
		[0,2,0,0],
		[0,2,0,0],
		[0,2,0,0],
		[0,2,0,0]
	];

	// 原点
	this.origin = {
		x:0,
		y:0
	};
	// 存储当前的状态
	this.dir = 0;
	// 存储方块四种状态的数组
	this.rotates = [
		[
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0]
		],
		[
			[0,0,0,0],
			[2,2,2,2],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0]
		],
		[
			[0,0,0,0],
			[2,2,2,2],
			[0,0,0,0],
			[0,0,0,0]
		]
	];
};

Square.prototype.canRotate= function(isValid){
	this.dir += 1;
	if (this.dir == 4) {
		this.dir = 0;
	}
	var test = [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
	for (var i = 0; i < this.data.length; i++) {
		for (var j = 0; j < this.data[0].length; j++) {
			test[i][j] = this.rotates[this.dir][i][j];
		}
	}
	return isValid(this.origin, test);
};

Square.prototype.rotate = function(){
	this.dir += 1;
	if (this.dir == 4) {
		this.dir = 0;
	}

	for (var i = 0; i < this.data.length; i++) {
		for (var j = 0; j < this.data[0].length; j++) {
			this.data[i][j] = this.rotates[this.dir][i][j];
		}
	}

};

Square.prototype.canDown = function(isValid){
	var test = {};
	test.x = this.origin.x + 1;
	test.y = this.origin.y;

	return isValid(test, this.data);
};

Square.prototype.down = function(){
	this.origin.x = this.origin.x + 1;
};
Square.prototype.canLeft= function(isValid){
	var test = {};
	test.x = this.origin.x;
	test.y = this.origin.y - 1;

	return isValid(test, this.data);
};

Square.prototype.left = function(){
	this.origin.y  = this.origin.y - 1;
};
Square.prototype.canRight = function(isValid){
	var test = {};
	test.x = this.origin.x;
	test.y = this.origin.y + 1;

	return isValid(test, this.data);
};

Square.prototype.right = function(){
	this.origin.y  = this.origin.y + 1;
};