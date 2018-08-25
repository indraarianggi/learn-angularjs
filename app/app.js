var ninjaApp = angular.module('ninjaAppModule', ['ngRoute']);

ninjaApp.config(['$routeProvider', function($routeProvider) { // fire before application run
    
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'NinjaController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        })
        .otherwise({
            redirectTo: '/home'
        });

}]);

ninjaApp.run(function() { // fire when application run
    
});

// custom directive
ninjaApp.directive('randomNinja', [function(){

    return {
        restrict    : 'EA', // use directive in html file as Element (E) or Attribute (A)
        scope       : {
            ninjas  : '=',
            title   : '='
        },
        templateUrl : 'views/random.html',
        controller  : function($scope) {
            $scope.random = Math.floor(Math.random() * 4);
        }
    };

}]);

ninjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http) {
    
    $scope.removeNinja = function(ninja) {
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function() {
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true
        });

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
    }

    $http({method: 'GET', url: 'data/ninjas.json'}).then(function(ninjas) {
        $scope.ninjas = ninjas.data;
    });

}]);
