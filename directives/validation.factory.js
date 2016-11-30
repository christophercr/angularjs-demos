(function () {

    'use strict';

    angular.module('app').factory(
        'validationFactory',
        ['$log', function ($log) {
            $log.debug('factory --- instantiated...');

            return {

                validateEmail: function (email) {
                    $log.debug('factory --- validating email...');

                    var emailMatches = email.match(/([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@(gmail|outlook)\.com$/);

                    if (emailMatches) {
                        return true;
                    } else {
                        return false;
                    }
                }
            };
        }]
    );
})();
