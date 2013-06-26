module.exports = (grunt) ->
  grunt.initConfig
  	coffee:
  	  compile:
  		files:
  	      './bwf/client/js/**/*.js': './bwf/client/coffee/**/*.coffee'
  
    watch:
   	  scripts:
	    files: ['./bwf/client/coffee/**/*.coffee']
	    tasks: ['coffee']
	    options:
		  livereload: true

  # Plugins
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  # Start
  grunt.registerTask 'server', ->
    grunt.util.spawn
	  cmd: 'coffee'
	  args: ['./server/game.coffee']
	  opts:
	    stdio: 'inherit'

  # Stop
  grunt.registerTask 'stop', ->
    grunt.util.spawn
	  cmd: 'pkill'
	  args: ['node', 'livereload']
	  opts:
	    stdio: 'inherit'
  
  # Default to start
  grunt.registerTask 'default', ['server', 'watch']