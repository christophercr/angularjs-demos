(function () {
    'use strict';

    var appModule = angular.module('app');

    appModule.component('profileList', {
        templateUrl: '/component-routing/profiles/profile-list.html',
        bindings: {$router: '<'},
        controller: ['$log', function ($log) {
            $log.debug('profileList - controller loaded...');

            this.$onInit = function () {
                $log.debug('profileList - initializing component...');
                this.profiles = [
                    {id: 10, description: 'Super admin'},
                    {id: 20, description: 'Project manager'},
                    {id: 30, description: 'Technical lead'},
                    {id: 40, description: 'Scrum master'}
                ];
            };
        }]
    });
})();
