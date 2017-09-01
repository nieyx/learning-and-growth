var Game = function(){
	// dom
	var gameDiv;
	var nextDiv;

	// 游戏矩阵
	var gameData = [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,0,0,0],
		[0,0,0,1,1,1,1,0,0,0],
		[0,0,1,1,1,1,1,0,0,0]
	];

	// divs
	var nextDivs = [];
	var gameDivs = [];

	// 当前方块和下一个方块
	var cur = null;
	var next = null;
	// 初始化div,
	/*
	container: 获取容器的id
	data： 从那个句珍重获取数据
	divs： 将新建的div添加到哪一个矩阵数组中*/
	var initDiv = function(container, data, divs){
	for (var i = 0; i < data.length; i++) {
		var gameDiv = [];
		for (var j = 0; j < data[0].length; j++) {
			var newNode = document.createElement('div');
			newNode.className = 'none';
			newNode.style.top = (i*20) + 'px';
			newNode.style.left = (j*20) + 'px';
			container.appendChild(newNode);
			gameDiv.push(newNode);
		}
		divs.push(gameDiv);
	}
};
// 根据游戏二维数组中的每一项的状态，来判断是什么class的div，然后在gameDivs中展示出来
/*
data：从哪一个二维数组中取出数据
divs：将20*20的小盒子放在那个一个div中*/
var refreshDiv = function(data,divs){
	for (var i = 0; i < data.length; i++) {
		for (var j = 0; j < data[0].length; j++) {
			if(data[i][j] == 0) {
				divs[i][j].className = 'none';
			} else if (data[i][j] == 1) {
				divs[i][j].className = 'done';
			} else if (data[i][j] == 2) {
				divs[i][j].className = 'current';
			}
		}
	}
};

// 初始化的方法
	var init = function(doms){
		gameDiv = doms.gameDiv;
		nextDiv = doms.nextDiv;

		cur = new Square();
		next = new Square();
		// 暂时设置游戏区域的内容
		/*设置原点坐标*/
		cur.origin.x = 10;
		cur.origin.y = 5;
		for (var i = 0; i < cur.data.length; i++) {
			for (var j = 0; j < cur.data[0].length; j++) {
				 gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
			}
		}
		initDiv(gameDiv, gameData, gameDivs);
		initDiv(nextDiv, next.data, nextDivs);
		refreshDiv(gameData,gameDivs);
		refreshDiv(next.data,nextDivs);
	};

	// 导出api
	this.init = init;
};