(function () {
    'use strict';

    var appModule = angular.module('app');

    appModule.controller('profileListController', ['$log', function ($log) {
        $log.debug('profileList - controller loaded...');

        this.initialize = function () {
            $log.debug('profileList - initializing...');
            this.profiles = [
                {id: 10, description: 'Super admin'},
                {id: 20, description: 'Project manager'},
                {id: 30, description: 'Technical lead'},
                {id: 40, description: 'Scrum master'}
            ];
        };

        // initializing variables
        this.initialize();
    }]);
})();
