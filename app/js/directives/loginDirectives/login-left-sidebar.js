app.directive('leftLoginSidebar', function(){
    return {
        //controller: 'LoginController',
        restrict: 'E',
        templateUrl: 'templates/public/left-sidebar.html',
        replace: true
    }
});