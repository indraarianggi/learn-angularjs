var ninjaApp = angular.module('ninjaAppModule', []);

ninjaApp.config(function() { // fire before application run

});

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
