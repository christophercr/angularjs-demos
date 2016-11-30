(function () {

    'use strict';

    angular.module('app').directive(
        'emailDirective',
        ['$log', function ($log) {
            return {
                restrict: 'E',
                templateUrl: 'email-field.html',
                // template: "<label>Email:</label>" +
                // "<input type='text' class='email-input'" +
                //     "ng-model='ctrl.email'" +
                //     "ng-class='{invalid : ctrl.isValidEmail === false, valid : ctrl.isValidEmail === true}'/>" +
                // "<div ng-show='ctrl.isValidEmail === true'>Excellent! Your email is valid</div>" +
                // "<div ng-show='ctrl.isValidEmail === false'>Sorry, this email is not valid. Try another</div>" +
                // "<button ng-click='ctrl.validateEmail()'>Validate</button>" +
                // "<button ng-click='ctrl.clearField()'>Clear</button>",
                scope: {
                    email: '='
                },
                controllerAs: 'ctrl',
                bindToController: true,
                controller: ['$scope', 'validationFactory', function ($scope, validationFactory) {
                    $log.debug('directive --- controller loaded!');

                    var ctrl = this;

                    ctrl.validateEmail = function () {
                        $log.debug('directive --- validating email...');

                        // var emailMatches = ctrl.email.match(/([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@(gmail|outlook)\.com$/);

                        // if (emailMatches) {
                        //     ctrl.isValidEmail = true;
                        // } else {
                        //     ctrl.isValidEmail = false;
                        // }
                        ctrl.isValidEmail = validationFactory.validateEmail(ctrl.email);
                    };

                    ctrl.clearField = function () {
                        $log.debug('directive --- clearing field...');
                        ctrl.email = '';
                        ctrl.isValidEmail = undefined;
                    };

                    var deregisterWatcher = $scope.$watch(function () {
                        return ctrl.email;
                    }, function (newValue, oldValue) {
                        if (newValue !== oldValue) {
                            //ctrl.validateEmail();
                        }
                    });

                    // Deregister the event listeners and watchers upon directive destruction
                    var removeListener = $scope.$on('$destroy', function () {
                        $log.debug('directive --- destroyed, cleaning-up...');
                        removeListener();
                        deregisterWatcher();
                    });

                }],
                link: function ($scope, $element, attr) {
                    $log.debug('directive --- rendered');
                }
            };
        }]
    );
})();
