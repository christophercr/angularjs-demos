(function () {
    'use strict';

    var appModule = angular.module('app', []);

    appModule.controller('appController', ['$log', function ($log) {
        var appCtrl = this;

        appCtrl.showElements = true;
        appCtrl.email = '';

        appCtrl.validateEmail = function () {
            $log.debug('appCtrl --- validating email...');

            var emailMatches = appCtrl.email.match(/([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@(gmail|outlook)\.com$/);

            if (emailMatches) {
                appCtrl.isValidEmail = true;
            } else {
                appCtrl.isValidEmail = false;
            }
        };

        appCtrl.clearField = function () {
            $log.debug('appCtrl --- clearing field...');
            appCtrl.email = '';
            appCtrl.isValidEmail = undefined;
        };

        appCtrl.toggleElements = function () {
            appCtrl.showElements = !appCtrl.showElements;
        };

    }]);
}());
