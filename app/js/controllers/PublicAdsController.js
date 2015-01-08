app.controller('PublicAdsController', function($scope, adsData){
    adsData.getPublicAds()
        .$promise
        .then(function(data){
            $scope.ads = data;
        })
})
