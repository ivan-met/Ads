app.controller('RegisterController',function($scope, townsData, userData){
    $scope.pageTitle = 'Register';
    townsData.getTowns()
        .$promise
        .then(function(data){
            $scope.towns = data;
            //console.log(data);
        })
    $scope.register = function(user){
        //console.log(user);
        userData.register(user);
    }
});
