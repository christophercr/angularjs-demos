(function () {
    'use strict';

    var appModule = angular.module('app');

    appModule.component('profilesPage', {
        templateUrl: '/component-routing/profiles/profiles-page.html',
        $routeConfig: [
            {path: '/', name: 'ProfileList', component: 'profileList', useAsDefault: true},
            {path: '/:id', name: 'ProfileDetail', component: 'profileDetail'}
        ]
    });
})();
