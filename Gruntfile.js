module.exports = function(grunt) {
  // Configure plugins
  grunt.initConfig({
    watch: {
      update: {
        files: ['./bwf/**/*.*'],
        tasks: ['update'],
        options: {
          livereload: true
        }
      }
    }
  });
  
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task
  grunt.registerTask('default', ['server', 'watch']);
  
  // Start the server
  grunt.registerTask('server', 'Starts the server.', function() {
    grunt.util.spawn({
      cmd: 'node',
      args: ['bwf/server/server.js', '--watch bwf/server', '--watch bwf/shared'],
      opts: {
        stdio: 'inherit'
      }
    });
  });
  
  // Stop the server
  grunt.registerTask('stop', 'Stops the server.', function() {
    grunt.util.spawn({
      cmd: 'pkill',
      args: ['node', 'livereload'],
      opts: {
        stdio: 'inherit'
      }
    });
  });
  
  // Update the dependencies
  grunt.registerTask('update', 'Updates Google Closure\'s deps.js file.', function() {
    grunt.util.spawn({
      cmd: 'python',
      args: ['./bin/lime.py', 'update']
    });
  });

  // Update submodules orinitialize them
  grunt.registerTask('install', 'Updates or intializes the submodules then install npm dependencies.', function() {
    grunt.util.spawn({
      cmd: 'git',
      args: ['submodule', 'update', '--init']
    });

    grunt.util.spawn({
      cmd: 'npm',
      args: ['install'],
      opts: {
        stdio: 'inherit'
      }
    });

    grunt.task.run('update')
  });
};
