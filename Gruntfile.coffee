module.exports = (grunt)->

  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['clean', 'typescript'])

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    typescript:
      base:
        src: ['src/**/*.ts']
        dest: 'ddd.js'
        options:
          sourceMap: true

      test:
        src: ['tests/**/*.ts']
        dest: 'ddd-spec.js'
        options:
          sourceMap: true

    watch:
      typescript:
        files: ['src/**/*.ts', 'tests/**/*.ts']
        tasks: ['clean', 'typescript']
        options:
          atBegin: true

    clean: ['src/**/*.js', 'tests/**/*.js']

  })
