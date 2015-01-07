app.directive('loginForm', function(){
    return {
        //controller: 'LoginController',
        restrict: 'E',
        templateUrl: 'templates/login/login-form.html',
        replace: true
    }
});
