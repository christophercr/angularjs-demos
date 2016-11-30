(function () {

    'use strict';

    angular.module('app').component(
        'emailComponent',
        {
            templateUrl: 'email-field.html',
            // template: "<label>Email:</label>" +
            // "<input type='text' class='email-input'" +
            //     "ng-model='ctrl.email'" +
            //     "ng-class='{invalid : ctrl.isValidEmail === false, valid : ctrl.isValidEmail === true}'/>" +
            // "<div ng-show='ctrl.isValidEmail === true'>Excellent! Your email is valid</div>" +
            // "<div ng-show='ctrl.isValidEmail === false'>Sorry, this email is not valid. Try another</div>" +
            // "<button ng-click='ctrl.validateEmail()'>Validate</button>" +
            // "<button ng-click='ctrl.clearField()'>Clear</button>",
            bindings: {
                email: '<'
            },
            controllerAs: 'ctrl',
            controller: ['$scope', '$log', 'validationService', function ($scope, $log, validationService) {
                $log.debug('component --- controller loaded!');

                var ctrl = this;

                ctrl.validateEmail = function () {
                    $log.debug('component --- validating email...');

                    // var emailMatches = ctrl.email.match(/([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@(gmail|outlook)\.com$/);

                    // if (emailMatches) {
                    //     ctrl.isValidEmail = true;
                    // } else {
                    //     ctrl.isValidEmail = false;
                    // }
                    ctrl.isValidEmail = validationService.validateEmail(ctrl.email);
                };

                ctrl.clearField = function () {
                    $log.log('component --- clearing field...');
                    ctrl.email = '';
                    ctrl.isValidEmail = undefined;
                };

                ctrl.$onInit = function () {
                    $log.debug('component --- initialized');
                };

                ctrl.$postLink = function () {
                    $log.debug('component --- rendered');
                };

                ctrl.$onChanges = function (changesObj) {
                    if (changesObj.email && !changesObj.email.isFirstChange() && changesObj.email.currentValue !== changesObj.email.previousValue) {
                        //ctrl.validateEmail();
                    }
                };

                // Deregister the event listeners and watchers upon component destruction
                ctrl.$onDestroy = function () {
                    $log.debug('component --- destroyed, cleaning-up...');
                };

            }]
        }
    );
})();
