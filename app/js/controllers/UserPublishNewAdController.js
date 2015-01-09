'use strict';

app.controller('UserPublishNewAdController',
    function ($scope, $location, townsService, categoriesService,
              userService, notifyService) {
        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.publishAd = function(adData) {
            userService.createNewAd(adData,
                function success() {
                    notifyService.showInfo('ad created, waiting for approval');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Ad create failed', err);
                }
            );
        };
    }
);

