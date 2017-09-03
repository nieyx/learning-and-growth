var Local = function(){
	// 游戏对象
	var game;
	// 创建一个定时器
	var timer = null;
	var InterVal = 500;

	// 定义时间变量
	var timeCount = 0;
	var time = 0;
	// 绑定键盘事件
	var keyEvent = function(){
		document.onkeydown = function(e){
			if(e.keyCode == 38) {
				// up
				game.rotate();
			} else if (e.keyCode == 39) {
				// right
				game.right();
			} else if (e.keyCode == 40) {
				// down
				game.down();
			} else if (e.keyCode == 37) {
				// left
				game.left();
			} else if (e.keyCode == 32) {
				// space
				game.fall();
			}
		};
	};
	// 方块的自动定时掉落
	var move = function(){
		timeFunc();
		if(!game.down()){
			game.fixed();
			var line = game.checkClear();
			if (line) {
				game.addScore(line);
			}
			if(game.checkGameOver()) {
				stop();
				textDiv.innerHTML = '你输了';
			} else {
				game.performNext(perFormType(), perFormDir());
				textDiv.innerHTML = '你赢了';
			}
		}
	};
	var perFormType = function(){
		// 0~6
		return Math.ceil(Math.random() * 7) - 1; 
	};
	var perFormDir = function(){
		// 0~3
		return Math.ceil(Math.random() * 4) - 1; 
	};

	var timeFunc = function(){
		timeCount += 1;
		if (timeCount == 5) {
			time += 1;
			timeCount = 0;
		}

		game.setTime(time);
	};
	// 开始
	var start = function(){
		var doms = {
			gameDiv : document.getElementById('game'),
			nextDiv : document.getElementById('next'),
			timeDiv : document.getElementById('time'),
			scoreDiv : document.getElementById('score'),
			textDiv : document.getElementById('text'),
		};

		game = new Game();
		game.init(doms, perFormType(), perFormDir());
		keyEvent();
		game.performNext(perFormType(), perFormDir());
		timer = setInterval(move,InterVal);
	};

	var stop = function(){
		clearInterval(timer);
		timer = null;
		document.onkeydown = null;
	};
	// 导出api
	this.start = start;
};