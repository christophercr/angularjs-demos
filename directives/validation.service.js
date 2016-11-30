(function () {

    'use strict';

    angular.module('app').service(
        'validationService',
        ['$log', function ($log) {
            $log.debug('service --- instantiated...');

            this.validateEmail = function (email) {
                $log.debug('service --- validating email...');

                var emailMatches = email.match(/([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@(gmail|outlook)\.com$/);

                if (emailMatches) {
                    return true;
                } else {
                    return false;
                }
            };
        }]
    );
})();
