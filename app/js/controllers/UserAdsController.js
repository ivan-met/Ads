'use strict';

app.controller('UserAdsController',
    function ($scope, $location,  userService, notifyService, pageSize) {
        $scope.adsParams = {
            startPage: 1,
            pageSize: pageSize
        };

        userService.getUserAds(
            $scope.adsParams,
            function success(data){
                $scope.ads = data;
            },
            function error(err) {
                notifyService.showError("Cannot load ads", err);
            }
        );

    }
);