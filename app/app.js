var ninjaApp = angular.module('ninjaAppModule', []);

ninjaApp.config(function() { // fire before application run

});

ninjaApp.run(function() { // fire when application run
    
});

ninjaApp.controller('NinjaController', ['$scope', function($scope) {
    
    $scope.message = "Helloo World!";

    $scope.ninjas = ['Indra', 'Arianggi', 'Suryaatmaja', 'Candra']

}]);
