app.controller('LoginController',function($scope, userData){
    $scope.pageTitle = 'Login';
    $scope.login = function(user){
        console.log(user);
        userData.login(user);
    }
});
