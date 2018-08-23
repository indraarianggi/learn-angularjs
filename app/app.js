var ninjaApp = angular.module('ninjaAppModule', ['ngRoute']);

ninjaApp.config(['$routeProvider', function($routeProvider) { // fire before application run
    
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
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

ninjaApp.controller('NinjaController', ['$scope', function($scope) {
    
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

    $scope.ninjas = [
        {
            name: 'Indra',
            belt: 'Black',
            rate: 100,
            available: true
        },
        {
            name: 'Arianggi',
            belt: 'Green',
            rate: 30,
            available: false
        },
        {
            name: 'Suryaatmaja',
            belt: 'Orange',
            rate: 10,
            available: true
        },
        {
            name: 'Candra',
            belt: 'Yellow',
            rate: 50,
            available: false
        }
    ];

}]);
