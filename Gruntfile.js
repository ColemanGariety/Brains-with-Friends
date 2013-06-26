module.exports = function(grunt) {
  // Configure plugins
  grunt.initConfig({
    watch: {
      scripts: {
        files: "./bwf/client/coffee/**/*.coffee",
        tasks: ["coffee"],
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
      args: ['./bwf/server/server.js'],
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
};