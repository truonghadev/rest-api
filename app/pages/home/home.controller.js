angular.module('rest-api.home').controller('HomeCtrl', ['$scope', 'HomeService', function($scope, HomeService) {

  (function() {
    HomeService.getApis().then(function(res) {
      console.log(res);
    }, function(err) {
      console.log(err)
    });
  })()
}]);
