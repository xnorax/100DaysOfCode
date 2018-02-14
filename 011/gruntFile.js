module.exports = function(grunt) {

    grunt.initConfig({
        name: 'class',
        watch: {
            files: ['*.js','.css'],
            task: ['updated']
        },
        uglify: {
            build: {
                src: ['index.js','logger.js'],
                dest: 'dist/bundle.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('updated', () => {
        grunt.log.writeln('It is updated again');
    });

    grunt.registerTask('default', () => {
        grunt.log.writeln(`Hello, ${grunt.config.get('name')}`);
    });

}