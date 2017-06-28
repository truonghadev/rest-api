angular.module('rest-api.home', [])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'pages/home/home.html',
        controller: 'HomeCtrl',
        title: 'Home'
      });
}])
