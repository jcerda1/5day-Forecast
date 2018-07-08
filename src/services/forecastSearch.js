angular.module('5day-forecast')
.service('forecastSearch', function($http){
  this.search = function(query, cb) {
    return $http({
      method: 'GET', 
      url: 'https://api.openweathermap.org/data/2.5/forecast',
      params: {
        zip: query,
        key: ,
      }
    }).then( 
        function successCallback(response) {
          callback(response.data);
        }, function errorCallback(response) {
          console.log(response);
        }
    );
  };
});