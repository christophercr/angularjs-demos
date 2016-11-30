(function () {
    'use strict';

    var appModule = angular.module('app');

    appModule.controller('userListController', ['$log', function ($log) {
        $log.debug('userList - controller loaded...');

        this.initialize = function () {
            $log.debug('userList - initializing...');
            this.users = [
                {id: 1, firstName: 'John', lastName: 'Doe'},
                {id: 2, firstName: 'Michael', lastName: 'Stevenson'},
                {id: 3, firstName: 'Louise', lastName: 'Byron'}
            ];
        };

        // initializing variables
        this.initialize();
    }]);
})();
