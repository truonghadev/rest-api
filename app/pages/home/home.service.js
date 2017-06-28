angular.module('rest-api.home').factory('HomeService', ['$http', '$q', function($http, $q) {

  var httpAsPromise = function(options) {
      var deferred = $q.defer();
      $http(options).
          success(function (response, status, headers, config) {
              deferred.resolve(response);
          })
          .error(function (response, status, headers, config) {
              deferred.reject(response);
          });
      return deferred.promise;
  };

  function createApi(data) {
      return httpAsPromise({
          method: 'POST',
          url: '/api',
          data: data
      });
  }

  function getApis() {
      return httpAsPromise({
          method: 'GET',
          url: '/todos'
      });
  }

  return {
    createApi: createApi,
    getApis: getApis
  }
}]);
