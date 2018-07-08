angular.module('5day-forecast')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($window) {
      this.data = $window.data;
      this.forecasts = data[0].list
      this.currentCity = data[0].city.name;
      
    }
  });