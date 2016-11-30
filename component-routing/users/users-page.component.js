(function () {
    'use strict';

    var appModule = angular.module('app');

    appModule.component('usersPage', {
        templateUrl: '/component-routing/users/users-page.html',
        $routeConfig: [
            {path: '/', name: 'UserList', component: 'userList', useAsDefault: true},
            {path: '/:id', name: 'UserDetail', component: 'userDetail'}
        ]
    });
})();
