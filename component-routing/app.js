(function () {
    'use strict';
    var appModule = angular.module('app', ['ngComponentRouter']);

    appModule.config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    });

    appModule.value('$routerRootComponent', 'app');

    appModule.component('app', {
        templateUrl: 'app.html',
        $routeConfig: [
            {path: '/profiles/...', name: 'ProfilesPage', component: 'profilesPage'},
            {path: '/users/...', name: 'UsersPage', component: 'usersPage', useAsDefault: true}
        ]
    });
})();
