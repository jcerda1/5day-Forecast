angular.module('5day-forecast')
  .component('forecastList', {
  	bindings: {
  	  forecasts: '<'
  	},
    templateUrl: "src/templates/forecastList.html"
  });