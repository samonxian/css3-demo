module.exports = function(grunt){
	grunt.initConfig({
		src_config: {
			cwd: 'src/',
			src: '**/*',
			dist: 'temp_build/'
		},
		jshint: {
			options: {
				//大括号包裹
				curly: false,
				//对于简单类型，使用===和!==，而不是==和!=
				eqeqeq: false,
				//对于首字母大写的函数（声明的类），强制使用new
				newcap: true,
				//禁用arguments.caller和arguments.callee
				noarg: false,
				//对于属性使用aaa.bbb而不是aaa['bbb']
				sub: true,
				//查找所有未定义变量
				undef: true,
				//查找类似与if(a = 0)这样的代码
				boss: false,
				//指定运行环境为node.js
				node: true,
				smarttabs: true,
				//是否严格模式
				strict: false,
				"globals": {
					
				},
			},
			//具体任务配置
			/*files: {
				src: [
					
				]
			},*/
			//全部
			all : [
				'style/js/**/.js'
			]
		},
		compass : {
			sass: {                   
				options: {            
					sassDir: 'style/scss',
					cssDir: 'style/css',
				}
			},
		},
		uglify: {
			minjs: {
				files: [{
					expand : true,
					cwd : 'style/js',
					src : '**/*.js',
					dest : 'temp/js',
					ext: '.min.js'
		      	}]
			},
		},
		cssmin: {
			cssmin: {
				files: [{
					expand: true,
					cwd: 'style/css',
					src: ['*.css', '!*.min.css'],
					dest: 'temp/css',
					ext: '.min.css'
				}]
			}
		},
		htmlmin: {
			options: {                                 
				removeComments: true,
				collapseWhitespace: true
			},
			target: {
				files: [{
					expand: true,
					cwd: 'temp_build/',
					src: ['**/*.html'],
					dest: 'build/',
				}]
			}
		},
		'string-replace': {
			replace_css : {
				files: [{
					expand: true,
					cwd: '<%= src_config.cwd %>',
					src: '<%= src_config.src %>.html',
					dest: '<%= src_config.dist %>'
				}],
				options: {
					replacements: [{
						pattern: /<link rel="stylesheet" href="(.*?)">/ig,
						replacement: function (match, p1) {
							var dir = p1.split("css/");
							var filename = dir[1].replace(".",".min.");
							var file = "<style>" + grunt.file.read('temp/css/' + filename) + "</style>";
							console.log('temp/css/' + filename);
							return file;
						}
					}]
				}
			}
		},
		clean : {
			clean: {
				src: ["temp_build/", "temp/",".sass-cache/",".sublime-grunt.cache"]
			}
		},
		watch: {
			jshint : {
				files: ['style/**/*.js'],
				tasks: ['jshint'],
			},
			sass : {
				files: ['style/**/*.scss'],
				tasks: ['compass'],
			},
			minjs : {
				files: ['style/**/*.js'],
				tasks: ['uglify'],
			},
			cssmin : {
				files: ['style/**/*.css'],
				tasks: ['cssmin'],
			},
			replace_css : {
				files: ['style/**/*.css','style/**/*.js','src/**/*.js'],
				tasks: ['string-replace'],
			},
			htmlmin : {
				files: ['style/**/*.css','style/**/*.js','src/**/*.js'],
				tasks: ['htmlmin'],
			},
			clean : {
				files: ['style/**/*.css','style/**/*.js','src/**/*.js'],
				tasks: ['clean'],
			},
		},
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-string-replace');	
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	// grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask("default",['jshint','compass','uglify','cssmin','string-replace','htmlmin','clean']);
}
