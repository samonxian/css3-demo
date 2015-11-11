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
			dist: {                   
				options: {            
					sassDir: 'style/scss',
					cssDir: 'style/css',
				}
			},
		},
		uglify: {
			minjs: {
				src: ['style/js/*.js'],
				dest: 'temp/js/*.min.js',
			},
			mincss: {
				src: ['style/css/*.css'],
				dest: ['temp/css/*.css'],
			},
		},
		watch: {
			minjs: {
				files: ['js/**/*.js'],
				tasks: ['uglify'],
			},
			mincss: {
				files: ['css/**/*.css'],
				tasks: ['uglify'],
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask("default",['jshint','compass','uglify']);
}
