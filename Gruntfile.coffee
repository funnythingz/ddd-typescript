module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      typesc:
        files: 'ddd.min.js': ['ddd.js']

    concat:
      dest:
        src: ['src/**/*.js']
        dest: 'ddd.js'

      test:
        src: ['ddd.js', 'tests/**/*.js']
        dest: 'ddd-test.js'

      options:
        separator: ';'

    typescript:
      base:
        src: ['src/**/*.ts', 'tests/**/*.ts']
        options:
          sourceMap: false

    watch:
      typescript:
        files: ['src/**/*.ts', 'tests/**/*.ts']
        tasks: ['typescript', 'concat', 'uglify', 'clean']
        options:
          atBegin: true

    clean: ['src/**/*.js', 'tests/**/*.js']

  })

  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['typescript', 'concat', 'uglify', 'clean'])
