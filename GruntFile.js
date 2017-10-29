path = require('path')

module.exports = function (grunt) {
    
        grunt.initConfig({
    
            express: {
                all: {
                    options: {
                        bases: path.resolve('watch'),
                        port: 8081,
                        hostname: "0.0.0.0",
                        livereload: true
                    }
                }
            },
    
            watch: {
                files: ['results.json', 'index.html'],
                options: {
                    livereload: true
                }
            },
    
            open: {
                all: {
                    path: 'http://localhost:8081/index.html'
                }
            }
    
        });
    
        grunt.loadNpmTasks('grunt-express');
        grunt.loadNpmTasks('grunt-open');
        grunt.loadNpmTasks('grunt-contrib-watch');
    
        grunt.registerTask('server', ['express', 'open', 'watch']);
    };