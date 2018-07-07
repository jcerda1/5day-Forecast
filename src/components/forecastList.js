angular.module('5day-forecast')
  .component('forecastList', {
  	bindings: {
  	  main: '<'
  	},
    templateUrl: "src/templates/forecastList.html"
  });