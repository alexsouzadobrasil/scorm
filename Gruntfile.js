module.exports = function(grunt) {

    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        },
        uglify: {
            options: {
                mangle: false
            },

            my_target: {
                files: {
                    'dist/init.js': ['bower_components/jquery/dist/jquery.min.js','bower_components/scorm-api.js', 'vendor/init.js']
                }
            }
        }, // uglify
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/style.css': ['vendor/**/*.css']
                }
            }
        },
        watch: {
            dist: {
                files: [
                    'vendor/**/*.js', 'vendor/**/*.css'
                ],

                tasks: ['uglify', 'cssmin']
            }
        } // watch
    });


    // Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-serve');
    // Tarefas que serão executadas
    // grunt.registerTask('default', ['uglify']);
    // Tarefa para Watch
    grunt.registerTask('w', ['watch']);
    //Quando eu digitar “grunt w” no terminal, ele vai rodar a
    // task watch, que tem acoplada a ela as tasks “uglify” e outros do array
};
