(function (angular) {
    'use strict';

    function DialogService($q) {
        this.confirm = function (message) {
            return $q.when(window.confirm(message || 'Is it OK?'));
        };
    }

    angular.module('dialog', [])

        .service('dialogService', DialogService);
})(window.angular);
