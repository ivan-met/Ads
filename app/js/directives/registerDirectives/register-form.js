app.directive('registerForm', function(){
    return {
        //controller: 'RegisterController',
        restrict: 'E',
        templateUrl: 'templates/register/register-form.html',
        replace: true
    }
});