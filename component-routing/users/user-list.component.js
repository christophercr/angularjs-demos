(function () {
    'use strict';

    var appModule = angular.module('app');

    appModule.component('userList', {
        templateUrl: 'users/user-list.html',
        bindings: {$router: '<'},
        controller: ['$log', function ($log) {
            $log.debug('userList - controller loaded...');

            this.$onInit = function () {
                $log.debug('userList - initializing component...');
                this.users = [
                    {id: 1, firstName: 'John', lastName: 'Doe'},
                    {id: 2, firstName: 'Michael', lastName: 'Stevenson'},
                    {id: 3, firstName: 'Louise', lastName: 'Byron'}
                ];
            };
        }]
    });
})();
