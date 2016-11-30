(function () {
    'use strict';
    var appModule = angular.module('app', ['ui.router']);

    appModule.config(function ($locationProvider, $stateProvider) {
        // Enable HTML5 History API: adds support for pretty URLs
        // requires server configuration (URL rewriting)
        $locationProvider.html5Mode(true);

        // application root state
        $stateProvider
            .state('home', {
                url: '/',
                template: '<app></app>',
                onEnter: ['$log', function ($log) {
                    $log.debug('home state entered!!');
                }]
            })
            .state('users', {
                parent: 'home',
                url: 'users',
                templateUrl: './users/user-list.html',
                controller: 'userListController',
                controllerAs: '$ctrl',
                onEnter: ['$log', function ($log) {
                    $log.debug('users state entered!!');
                }]
            })
            .state('profiles', {
                parent: 'home',
                url: 'profiles',
                templateUrl: './profiles/profile-list.html',
                controller: 'profileListController',
                controllerAs: '$ctrl',
                onEnter: ['$log', function ($log) {
                    $log.debug('profiles state entered!!');
                }]
            });

    });

    appModule.component('app', {
        templateUrl: 'app.html',
        controller: ['$log', function ($log) {
            $log.debug('app - loading...');

            this.$onInit = function () {
                $log.debug('app - initializing...');
            };
        }]
    });
})();
