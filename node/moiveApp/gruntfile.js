module.exports = function(grunt){
	grunt.initConfig({
		// 要定义的任务
		watch: {
      jade: {
        files: ['views/**'],
        options: {
          livereload: true // 当文件有改动时，会重新启动服务
        }
      },
      js: {
        files: ['public/js/**', 'models/**/*.js', 'schemas/**/*.js'],
        //tasks: ['jshint'], // js的代码检查工具
        options: {
          livereload: true // 当文件有改动时，会重新启动服务
        }
      },
      uglify: {
        files: ['public/**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['public/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },

    nodemon: {
    	// dev代表开发环境
      dev: {
        options: {
          file: 'app.js', // 当前的入口文件
          args: [],
          ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
          watchedExtensions: ['js'],
          watchedFolders: ['./'],
          debug: true,
          delayTime: 1,
          env: {
            PORT: 3000
          },
          cwd: __dirname
        }
      }
    },

    concurrent: {
    	// 根据tasks中的内容来关联任务
      tasks: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
	});


	// 开发时不要因为某个错误而终止整个grunt任务
	grunt.option('force', true);

	// 当有文件修改时，会直接进行更新，
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 实时监听，监听app.js入口文件，当入口文件出现改动，会自动重启，
	grunt.loadNpmTasks('grunt-nodemon');

	// 来编译慢任务，优化编译任务时间，less，sass
	grunt.loadNpmTasks('grunt-concurrent');

	// 开发时不要因为某个错误而终止整个grunt任务
	grunt.option('force', true);

	// 来注册默认的任务，根据concurrent，在tasks中传递nodemon和watch，可一份诶来监听入口文件和文件的修改
	grunt.registerTask('default', ['concurrent']);
};