module.exports = function(grunt){
	grunt.initConfig({
		path : '../../svn/demo.hkoudai.com/',
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
					"qv" : true,
					"$" : true,
					"Zepto": true,
					"zUtil" : true,
					"zURL" : true,
					"zHttp" : true,
					"zMsg"  :true
				},
			},
			//具体任务配置
			files: {
				src: [
					'js/1.js', 
					'js/2.js'
				]
			}
		},
		concat: {
			options: {
			    separator: ';'
			},
			js: {
				src: ['js/1.js', 'js/2.js'],
				dest: 'build/js/scprits.js',
			},
			css: {
				src: ['css/1.css', 'css/2.css'],
				dest: 'build/css/styles.css',
			},
		},
		uglify: {
			minjs: {
				src: ['build/js/scprits.js'],
				dest: 'build/js/scprits.min.js',
			},
			mincss: {
				src: ['build/css/styles.css'],
				dest: 'build/css/scprits.min.css',
			},
		},
		copy : {
			main : {
				files : [ 
					{expand: true,flatten: true, src: ['js/*'], dest: '<%=path %>/js', filter: 'isFile'},	
					{expand: true,flatten: true, src: ['css/*'], dest: '<%=path %>/css', filter: 'isFile'},
					{expand: true,flatten: true, src: ['index.html'], dest: '<%=path %>', filter: 'isFile'},	
				]	
							
			}
		},
		watch: {
			js: {
				files: ['js/**/*.js'],
				tasks: ['concat'],
			},
			css: {
				files: ['css/**/*.css'],
				tasks: ['concat'],
			},
			minjs: {
				files: ['js/**/*.js'],
				tasks: ['uglify'],
			},
			mincss: {
				files: ['css/**/*.css'],
				tasks: ['uglify'],
			},
			uglify: {
				files: ['js/**/*.js'],
				tasks: ['uglify'],
			},
			copy : {
				files: ['*'],
                                tasks: ['copy'],

			},
		},
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask("default",['jshint','concat','uglify','copy','watch']);
}
