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
                // in case you want to render a view for this state
                // an empty <ui-view> element is needed in index.html
                //template: '<label>this is the home state template</label>',
                onEnter: ['$log', function ($log) {
                    $log.debug('home state entered!!');
                    $log.debug('home state has no template defined...');
                }]
            })
            .state('users', {
                url: '/users',
                views: {
                    'appContent': {
                        templateUrl: './users/user-list.html',
                        controller: 'userListController',
                        controllerAs: '$ctrl',
                        bindToController: true
                    }
                },
                onEnter: ['$log', function ($log) {
                    $log.debug('users state entered!!');
                }]
            })
            .state('profiles', {
                url: '/profiles',
                views: {
                    'appContent': {
                        templateUrl: './profiles/profile-list.html',
                        controller: 'profileListController',
                        controllerAs: '$ctrl',
                        bindToController: true
                    }
                },
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
