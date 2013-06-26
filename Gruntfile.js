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
  grunt.registerTask('server', function() {
    return grunt.util.spawn;
  });
  ({
    cmd: 'coffee',
    args: ['./server/game.coffee'],
    opts: {
      stdio: 'inherit'
    }
  });
  
  // Stop the server
  grunt.registerTask('stop', function() {
    return grunt.util.spawn;
  });
  return {
    cmd: 'pkill',
    args: ['node', 'livereload'],
    opts: {
      stdio: 'inherit'
    }
  };
};