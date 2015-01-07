app.controller('RegisterController',function($scope, townsData){
    $scope.pageTitle = 'Register';
    townsData.getTowns()
        .$promise
        .then(function(data){
            $scope.towns = data;
            console.log(data);
        })
});
