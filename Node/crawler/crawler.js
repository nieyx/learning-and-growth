var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';



// 过滤章节信息
function filterChapters(html) {
	// cheerio 类似于jquery
	var $ = cheerio.load(html);

	var chapters = $('.chapter');

	// data
	// [{
	// 	chapterTitle:'',
	// 	videos: [
	// 		title:'',
	// 		id:''
	// 	]
	// }]

	var courseData = [];
	chapters.each(function(item){
		var  chapter =  $(this);
		var chapterTitle = chapter.find('strong').text();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		}

		// 对video进行遍历
		videos.each(function(item){
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text()
			var id = video.attr('href').split('/video/')[1];

			chapterData.videos.push({
				title: videoTitle,
				id: id
			})

		})
		courseData.push(chapterData);
	})
	return courseData;
}

function printCourseInfo(courseData) {
	courseData.forEach(function(item){
		console.log(item.chapterTitle + '\n');
		item.videos.forEach(function(video){
			console.log('[' + video.id + ']' + video.title)
		})
	})
}
http.get(url, function(res){
	var html = '';

	res.on('data', function(data){
		html += data;
	})

	res.on('end', function () {
		// console.log(html)
		var courseData = filterChapters(html);
		printCourseInfo(courseData);

	})
}).on('error', function(){
	console.log('something error');
})