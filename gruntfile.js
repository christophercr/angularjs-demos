/*jshint node:true */

module.exports = function (grunt) {
    'use strict';

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: 'gruntfile.js',
            src: [
                'directives/**/*.js',
                'ng1-component-router/**/*.js',
                'component-routing/**/*.js',
                'ui-router/**/*.js',
                'ui-router-nested-states/**/*.js'
            ],
            test: 'test/**/*.spec.js'
        },

        jscs: {
            options: {
                config: '.jscsrc'
            },
            gruntfile: {
                files: {
                    src: [
                        'gruntfile.js'
                    ]
                }
            },
            spec: {
                files: {
                    src: [
                        'test/**/*.spec.js'
                    ]
                }
            },
            scripts: {
                files: {
                    src: [
                        'directives/**/*.js',
                        'ng1-component-router/**/*.js',
                        'component-routing/**/*.js',
                        'ui-router/**/*.js',
                        'ui-router-nested-states/**/*.js'
                    ]
                }
            }
        },

        clean: {
            dist: 'dist'
        },

        concat: {
            options: {separator: '\n'},
            dist: {
                src: ['src/scripts/**/*.js'],
                dest: 'dist/bundle.js'
            }
        },

        uglify: {
            dist: {
                src: 'dist/bundle.js',
                dest: 'dist/bundle.min.js'
            }
        },

        less: {
            dist: {
                files: {
                    'dist/style.css': 'src/style.less'
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    'dist/style.min.css': 'dist/style.css'
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        watch: {
            scripts: {
                files: 'src/scripts/**/*.js',
                tasks: ['test', 'build:scripts']
            },
            styles: {
                files: 'src/styles/**/*.less',
                tasks: ['build:styles']
            },
            tests: {
                files: 'test/**/*.spec.js',
                tasks: ['test']
            }
        },

        bump: {
            options: {
                commitMessage: 'chore: Bump for release (v%VERSION%)',
                files: ['package.json', 'bower.json'],
                commitFiles: ['package.json', 'bower.json'],
                push: false
            }
        },

        express: {
            options: {
                background: false,
                port: 3005
            },
            dev: {
                options: {
                    script: __dirname + '/server.js'
                }
            }
        }
    });

    // Load plugins
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('test', [
        'jshint',
        'jscs',
        'karma'
    ]);

    grunt.registerTask('build:scripts', [
        'concat',
        'uglify'
    ]);

    grunt.registerTask('build:styles', [
        'less',
        'cssmin'
    ]);

    grunt.registerTask('build', [
        'build:scripts',
        'build:styles'
    ]);

    grunt.registerTask('default', [
        'clean',
        'test',
        'build'
    ]);

    grunt.registerTask('server', [
        'express:dev'
    ]);

    grunt.registerTask('server:stop', [
        'express:dev:stop'
    ]);
};
