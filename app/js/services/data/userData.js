app.factory('userData',['$resource', 'baseServiceUrl','authentication', function($resource, baseServiceUrl, authentication){

    function registerUser(user){
        $resource(baseServiceUrl + 'user/register')
            .save(user)
            .$promise
            .then(function(data){
                authentication.saveUser(data);
            })

    }
    function loginUser(user){
        $resource(baseServiceUrl + 'user/login')
            .save(user)
            .$promise
            .then(function(data){
                authentication.saveUser(data);
            })
    }
    function logoutUser(){
        $resource(baseServiceUrl + 'user/logout')
            .save(user)
            .$promise
            .then(function(data){
                authentication.removeUser();
            })
    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}])
